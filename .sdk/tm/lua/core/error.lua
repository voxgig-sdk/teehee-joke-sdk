-- TeeheeJoke SDK error

local json = require("dkjson")

local TeeheeJokeError = {}
TeeheeJokeError.__index = TeeheeJokeError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function TeeheeJokeError.new(code, msg, ctx)
  local self = setmetatable({}, TeeheeJokeError)
  self.is_sdk_error = true
  self.sdk = "TeeheeJoke"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function TeeheeJokeError:context()
  return CONTEXT[self]
end


function TeeheeJokeError:error()
  return self.msg
end


function TeeheeJokeError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function TeeheeJokeError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function TeeheeJokeError:to_json()
  return json.encode(self:to_table())
end


function TeeheeJokeError:__tostring()
  return self.msg
end


function TeeheeJokeError.__tojson(self)
  return self:to_json()
end


return TeeheeJokeError
