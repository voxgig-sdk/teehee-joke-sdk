# TeeheeJoke SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TeeheeJokeFeatures
  def self.make_feature(name)
    case name
    when "base"
      TeeheeJokeBaseFeature.new
    when "test"
      TeeheeJokeTestFeature.new
    else
      TeeheeJokeBaseFeature.new
    end
  end
end
