package = "voxgig-sdk-teehee-joke"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/teehee-joke-sdk.git"
}
description = {
  summary = "TeeheeJoke SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["teehee-joke_sdk"] = "teehee-joke_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
