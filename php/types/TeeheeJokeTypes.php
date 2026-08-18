<?php
declare(strict_types=1);

// Typed models for the TeeheeJoke SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Joke entity data model. */
class Joke
{
    public string $answer;
    public string $id;
    public string $permalink;
    public string $permalink_html;
    public string $question;
}

/** Request payload for Joke#load. */
class JokeLoadMatch
{
    public string $id;
}

