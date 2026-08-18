-- Typed models for the TeeheeJoke SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Joke
---@field answer string
---@field id string
---@field permalink string
---@field permalink_html string
---@field question string

---@class JokeLoadMatch
---@field id string

local M = {}

return M
