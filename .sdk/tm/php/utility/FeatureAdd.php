<?php
declare(strict_types=1);

// TeeheeJoke SDK utility: feature_add

class TeeheeJokeFeatureAdd
{
    public static function call(TeeheeJokeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
