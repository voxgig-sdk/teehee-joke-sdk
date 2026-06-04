package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/teehee-joke-sdk/go"
	"github.com/voxgig-sdk/teehee-joke-sdk/go/core"

	vs "github.com/voxgig-sdk/teehee-joke-sdk/go/utility/struct"
)

func TestJokeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Joke(nil)
		if ent == nil {
			t.Fatal("expected non-nil JokeEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := jokeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "joke." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set TEEHEEJOKE_TEST_JOKE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		jokeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.joke", setup.data)))
		var jokeRef01Data map[string]any
		if len(jokeRef01DataRaw) > 0 {
			jokeRef01Data = core.ToMapAny(jokeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = jokeRef01Data

		// LOAD
		jokeRef01Ent := client.Joke(nil)
		jokeRef01MatchDt0 := map[string]any{
			"id": jokeRef01Data["id"],
		}
		jokeRef01DataDt0Loaded, err := jokeRef01Ent.Load(jokeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		jokeRef01DataDt0LoadResult := core.ToMapAny(jokeRef01DataDt0Loaded)
		if jokeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if jokeRef01DataDt0LoadResult["id"] != jokeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func jokeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "joke", "JokeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read joke test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse joke test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"joke01", "joke02", "joke03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("TEEHEEJOKE_TEST_JOKE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TEEHEEJOKE_TEST_JOKE_ENTID": idmap,
		"TEEHEEJOKE_TEST_LIVE":      "FALSE",
		"TEEHEEJOKE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["TEEHEEJOKE_TEST_JOKE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TEEHEEJOKE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewTeeheeJokeSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TEEHEEJOKE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TEEHEEJOKE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
