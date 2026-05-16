<?php
declare(strict_types=1);

// TeeheeJoke SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TeeheeJokeMakeContext
{
    public static function call(array $ctxmap, ?TeeheeJokeContext $basectx): TeeheeJokeContext
    {
        return new TeeheeJokeContext($ctxmap, $basectx);
    }
}
