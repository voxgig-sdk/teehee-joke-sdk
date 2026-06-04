# TeeheeJoke SDK

Random SFW question-and-answer jokes curated by Jesse G. Donat

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Teehee Joke API

Teehee is a small joke API run by [Jesse G. Donat](https://teehee.dev/) (donatj). It serves a hand-curated collection of question-and-answer jokes that has been growing for nearly a decade. All jokes follow the same Q/A format and are kept workplace-appropriate.

What you get from the API:

- A single `GET /api/joke` endpoint at `https://teehee.dev/api` that returns one random joke as JSON.
- Fields on each joke include `id`, `question`, `answer`, `permalink` (the API URL for that specific joke), and `permalink_html` (the web page for it).
- A browsable web view at `https://teehee.dev/joke` for each joke's permalink.

Operational notes: there are no published rate limits, but the author explicitly asks consumers to be kind and not hammer the service. CORS is reported as disabled on the community catalogue page, so browser-side calls may need a proxy.

## Try it

**TypeScript**
```bash
npm install teehee-joke
```

**Python**
```bash
pip install teehee-joke-sdk
```

**PHP**
```bash
composer require voxgig/teehee-joke-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/teehee-joke-sdk/go
```

**Ruby**
```bash
gem install teehee-joke-sdk
```

**Lua**
```bash
luarocks install teehee-joke-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { TeeheeJokeSDK } from 'teehee-joke'

const client = new TeeheeJokeSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o teehee-joke-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "teehee-joke": {
      "command": "/abs/path/to/teehee-joke-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Joke** | A single SFW Q/A joke with `id`, `question`, `answer`, `permalink`, and `permalink_html` fields, fetched one at a time from `GET /api/joke`. | `/joke/{id}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from teeheejoke_sdk import TeeheeJokeSDK

client = TeeheeJokeSDK({})


# Load a specific joke
joke, err = client.Joke(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'teeheejoke_sdk.php';

$client = new TeeheeJokeSDK([]);


// Load a specific joke
[$joke, $err] = $client->Joke(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/teehee-joke-sdk/go"

client := sdk.NewTeeheeJokeSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "TeeheeJoke_sdk"

client = TeeheeJokeSDK.new({})


# Load a specific joke
joke, err = client.Joke(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("teehee-joke_sdk")

local client = sdk.new({})


-- Load a specific joke
local joke, err = client:Joke(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = TeeheeJokeSDK.test()
const result = await client.Joke().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = TeeheeJokeSDK.test(None, None)
result, err = client.Joke(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = TeeheeJokeSDK::test(null, null);
[$result, $err] = $client->Joke(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Joke(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = TeeheeJokeSDK.test(nil, nil)
result, err = client.Joke(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Joke(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Teehee Joke API

- Upstream: [https://teehee.dev/](https://teehee.dev/)

- No formal license is stated on the homepage.
- Jokes are curated by [Jesse G. Donat](https://teehee.dev/) — credit the source if you redistribute.
- The author asks users to "be kind to the API" and not abuse it.

---

Generated from the Teehee Joke API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
