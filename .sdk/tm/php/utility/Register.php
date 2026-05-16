<?php
declare(strict_types=1);

// TeeheeJoke SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TeeheeJokeUtility::setRegistrar(function (TeeheeJokeUtility $u): void {
    $u->clean = [TeeheeJokeClean::class, 'call'];
    $u->done = [TeeheeJokeDone::class, 'call'];
    $u->make_error = [TeeheeJokeMakeError::class, 'call'];
    $u->feature_add = [TeeheeJokeFeatureAdd::class, 'call'];
    $u->feature_hook = [TeeheeJokeFeatureHook::class, 'call'];
    $u->feature_init = [TeeheeJokeFeatureInit::class, 'call'];
    $u->fetcher = [TeeheeJokeFetcher::class, 'call'];
    $u->make_fetch_def = [TeeheeJokeMakeFetchDef::class, 'call'];
    $u->make_context = [TeeheeJokeMakeContext::class, 'call'];
    $u->make_options = [TeeheeJokeMakeOptions::class, 'call'];
    $u->make_request = [TeeheeJokeMakeRequest::class, 'call'];
    $u->make_response = [TeeheeJokeMakeResponse::class, 'call'];
    $u->make_result = [TeeheeJokeMakeResult::class, 'call'];
    $u->make_point = [TeeheeJokeMakePoint::class, 'call'];
    $u->make_spec = [TeeheeJokeMakeSpec::class, 'call'];
    $u->make_url = [TeeheeJokeMakeUrl::class, 'call'];
    $u->param = [TeeheeJokeParam::class, 'call'];
    $u->prepare_auth = [TeeheeJokePrepareAuth::class, 'call'];
    $u->prepare_body = [TeeheeJokePrepareBody::class, 'call'];
    $u->prepare_headers = [TeeheeJokePrepareHeaders::class, 'call'];
    $u->prepare_method = [TeeheeJokePrepareMethod::class, 'call'];
    $u->prepare_params = [TeeheeJokePrepareParams::class, 'call'];
    $u->prepare_path = [TeeheeJokePreparePath::class, 'call'];
    $u->prepare_query = [TeeheeJokePrepareQuery::class, 'call'];
    $u->result_basic = [TeeheeJokeResultBasic::class, 'call'];
    $u->result_body = [TeeheeJokeResultBody::class, 'call'];
    $u->result_headers = [TeeheeJokeResultHeaders::class, 'call'];
    $u->transform_request = [TeeheeJokeTransformRequest::class, 'call'];
    $u->transform_response = [TeeheeJokeTransformResponse::class, 'call'];
});
