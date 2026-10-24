import { JokeEntity } from './entity/JokeEntity';
export type * from './TeeheeJokeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TeeheeJokeEntityBase } from './TeeheeJokeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class TeeheeJokeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Joke(entopts?: Record<string, any>): JokeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TeeheeJokeSDK;
    tester(testopts?: any, sdkopts?: any): TeeheeJokeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TeeheeJokeSDK;
export { stdutil, config, BaseFeature, TeeheeJokeEntityBase, TeeheeJokeSDK, SDK, };
export type { DirectResult };
