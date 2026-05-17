package voxgigteeheejokesdk

import (
	"github.com/voxgig-sdk/teehee-joke-sdk/go/core"
	"github.com/voxgig-sdk/teehee-joke-sdk/go/entity"
	"github.com/voxgig-sdk/teehee-joke-sdk/go/feature"
	_ "github.com/voxgig-sdk/teehee-joke-sdk/go/utility"
)

// Type aliases preserve external API.
type TeeheeJokeSDK = core.TeeheeJokeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TeeheeJokeEntity = core.TeeheeJokeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TeeheeJokeError = core.TeeheeJokeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJokeEntityFunc = func(client *core.TeeheeJokeSDK, entopts map[string]any) core.TeeheeJokeEntity {
		return entity.NewJokeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTeeheeJokeSDK = core.NewTeeheeJokeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
