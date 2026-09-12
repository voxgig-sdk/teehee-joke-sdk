import { TeeheeJokeEntityBase } from '../TeeheeJokeEntityBase';
import type { TeeheeJokeSDK } from '../TeeheeJokeSDK';
import type { Control } from '../types';
import type { Joke, JokeLoadMatch } from '../TeeheeJokeTypes';
declare class JokeEntity extends TeeheeJokeEntityBase<Joke> {
    constructor(client: TeeheeJokeSDK, entopts: any);
    make(this: JokeEntity): JokeEntity;
    load(this: any, reqmatch?: JokeLoadMatch, ctrl?: Control): Promise<JokeEntity>;
}
export { JokeEntity };
