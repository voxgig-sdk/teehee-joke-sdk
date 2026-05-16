-- TeeheeJoke SDK error

local TeeheeJokeError = {}
TeeheeJokeError.__index = TeeheeJokeError


function TeeheeJokeError.new(code, msg, ctx)
  local self = setmetatable({}, TeeheeJokeError)
  self.is_sdk_error = true
  self.sdk = "TeeheeJoke"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TeeheeJokeError:error()
  return self.msg
end


function TeeheeJokeError:__tostring()
  return self.msg
end


return TeeheeJokeError
