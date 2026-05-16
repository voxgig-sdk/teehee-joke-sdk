# TeeheeJoke SDK utility: make_context
require_relative '../core/context'
module TeeheeJokeUtilities
  MakeContext = ->(ctxmap, basectx) {
    TeeheeJokeContext.new(ctxmap, basectx)
  }
end
