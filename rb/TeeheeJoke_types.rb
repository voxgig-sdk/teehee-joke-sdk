# frozen_string_literal: true

# Typed models for the TeeheeJoke SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Joke entity data model.
#
# @!attribute [rw] answer
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] permalink
#   @return [String]
#
# @!attribute [rw] permalink_html
#   @return [String]
#
# @!attribute [rw] question
#   @return [String]
Joke = Struct.new(
  :answer,
  :id,
  :permalink,
  :permalink_html,
  :question,
  keyword_init: true
)

# Request payload for Joke#load.
#
# @!attribute [rw] id
#   @return [String, nil]
JokeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

