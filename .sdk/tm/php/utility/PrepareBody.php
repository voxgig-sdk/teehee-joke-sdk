<?php
declare(strict_types=1);

// TeeheeJoke SDK utility: prepare_body

class TeeheeJokePrepareBody
{
    public static function call(TeeheeJokeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
