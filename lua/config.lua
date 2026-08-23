-- TeeheeJoke SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TeeheeJoke",
      slug = "teehee-joke",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://teehee.dev/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["joke"] = {},
      },
    },
    entity = {
      ["joke"] = {
        ["fields"] = {
          {
            ["name"] = "answer",
            ["req"] = true,
            ["short"] = "The joke answer/punchline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "permalink",
            ["req"] = true,
            ["short"] = "API permalink URL for the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "permalink_html",
            ["req"] = true,
            ["short"] = "HTML page permalink URL for the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "question",
            ["req"] = true,
            ["short"] = "The joke question/setup",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "joke",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "tv-rabbit",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/joke/{id}",
                ["parts"] = {
                  "joke",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/joke",
                ["parts"] = {
                  "joke",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
