package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJokeEntityFunc func(client *TeeheeJokeSDK, entopts map[string]any) TeeheeJokeEntity

