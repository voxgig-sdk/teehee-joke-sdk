# TeeheeJoke SDK feature factory

from feature.base_feature import TeeheeJokeBaseFeature
from feature.test_feature import TeeheeJokeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TeeheeJokeBaseFeature(),
        "test": lambda: TeeheeJokeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
