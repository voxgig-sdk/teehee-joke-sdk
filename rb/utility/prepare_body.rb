# TeeheeJoke SDK utility: prepare_body
require_relative 'media'
module TeeheeJokeUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TeeheeJokeUtilities.raw_body(ctx.reqdata) if TeeheeJokeUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
