<?php
declare(strict_types=1);

// TeeheeJoke SDK utility: result_body

class TeeheeJokeResultBody
{
    public static function call(TeeheeJokeContext $ctx): ?TeeheeJokeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
