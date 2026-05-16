# ProjectName SDK exists test

import pytest
from teeheejoke_sdk import TeeheeJokeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TeeheeJokeSDK.test(None, None)
        assert testsdk is not None
