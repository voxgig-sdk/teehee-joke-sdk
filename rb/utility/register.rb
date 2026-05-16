# TeeheeJoke SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TeeheeJokeUtility.registrar = ->(u) {
  u.clean = TeeheeJokeUtilities::Clean
  u.done = TeeheeJokeUtilities::Done
  u.make_error = TeeheeJokeUtilities::MakeError
  u.feature_add = TeeheeJokeUtilities::FeatureAdd
  u.feature_hook = TeeheeJokeUtilities::FeatureHook
  u.feature_init = TeeheeJokeUtilities::FeatureInit
  u.fetcher = TeeheeJokeUtilities::Fetcher
  u.make_fetch_def = TeeheeJokeUtilities::MakeFetchDef
  u.make_context = TeeheeJokeUtilities::MakeContext
  u.make_options = TeeheeJokeUtilities::MakeOptions
  u.make_request = TeeheeJokeUtilities::MakeRequest
  u.make_response = TeeheeJokeUtilities::MakeResponse
  u.make_result = TeeheeJokeUtilities::MakeResult
  u.make_point = TeeheeJokeUtilities::MakePoint
  u.make_spec = TeeheeJokeUtilities::MakeSpec
  u.make_url = TeeheeJokeUtilities::MakeUrl
  u.param = TeeheeJokeUtilities::Param
  u.prepare_auth = TeeheeJokeUtilities::PrepareAuth
  u.prepare_body = TeeheeJokeUtilities::PrepareBody
  u.prepare_headers = TeeheeJokeUtilities::PrepareHeaders
  u.prepare_method = TeeheeJokeUtilities::PrepareMethod
  u.prepare_params = TeeheeJokeUtilities::PrepareParams
  u.prepare_path = TeeheeJokeUtilities::PreparePath
  u.prepare_query = TeeheeJokeUtilities::PrepareQuery
  u.result_basic = TeeheeJokeUtilities::ResultBasic
  u.result_body = TeeheeJokeUtilities::ResultBody
  u.result_headers = TeeheeJokeUtilities::ResultHeaders
  u.transform_request = TeeheeJokeUtilities::TransformRequest
  u.transform_response = TeeheeJokeUtilities::TransformResponse
}
