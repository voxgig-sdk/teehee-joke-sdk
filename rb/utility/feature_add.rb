# TeeheeJoke SDK utility: feature_add
module TeeheeJokeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
