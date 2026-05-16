<?php
declare(strict_types=1);

// TeeheeJoke SDK utility: result_headers

class TeeheeJokeResultHeaders
{
    public static function call(TeeheeJokeContext $ctx): ?TeeheeJokeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
