# TeeheeJoke SDK utility: make_context

from teeheejoke_sdk.core.context import TeeheeJokeContext


def make_context_util(ctxmap, basectx):
    return TeeheeJokeContext(ctxmap, basectx)
