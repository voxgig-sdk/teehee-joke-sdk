# TeeheeJoke SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TeeheeJokeFeatures
  def self.make_feature(name)
    case name
    when "base"
      TeeheeJokeBaseFeature.new
    when "ratelimit"
      TeeheeJokeRatelimitFeature.new
    when "retry"
      TeeheeJokeRetryFeature.new
    when "test"
      TeeheeJokeTestFeature.new
    when "timeout"
      TeeheeJokeTimeoutFeature.new
    else
      TeeheeJokeBaseFeature.new
    end
  end
end
