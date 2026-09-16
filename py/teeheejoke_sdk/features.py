# TeeheeJoke SDK feature factory

from teeheejoke_sdk.feature.base_feature import TeeheeJokeBaseFeature
from teeheejoke_sdk.feature.ratelimit_feature import TeeheeJokeRatelimitFeature
from teeheejoke_sdk.feature.retry_feature import TeeheeJokeRetryFeature
from teeheejoke_sdk.feature.test_feature import TeeheeJokeTestFeature
from teeheejoke_sdk.feature.timeout_feature import TeeheeJokeTimeoutFeature


_FEATURES = {
    "base": lambda: TeeheeJokeBaseFeature(),
    "ratelimit": lambda: TeeheeJokeRatelimitFeature(),
    "retry": lambda: TeeheeJokeRetryFeature(),
    "test": lambda: TeeheeJokeTestFeature(),
    "timeout": lambda: TeeheeJokeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
