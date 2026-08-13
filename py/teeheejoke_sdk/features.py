# TeeheeJoke SDK feature factory

from teeheejoke_sdk.feature.base_feature import TeeheeJokeBaseFeature
from teeheejoke_sdk.feature.test_feature import TeeheeJokeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TeeheeJokeBaseFeature(),
        "test": lambda: TeeheeJokeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
