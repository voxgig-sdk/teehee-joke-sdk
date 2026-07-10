// Typed models for the TeeheeJoke SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Joke {
  answer: string
  id: string
  permalink: string
  permalink_html: string
  question: string
}

export interface JokeLoadMatch {
  id?: string
}

