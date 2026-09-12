"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'TeeheeJoke',
        slug: "teehee-joke",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://teehee.dev/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            joke: {},
        }
    };
    entity = {
        "joke": {
            "fields": [
                {
                    "name": "answer",
                    "req": true,
                    "short": "The joke answer/punchline",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the joke",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "permalink",
                    "req": true,
                    "short": "API permalink URL for the joke",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "permalink_html",
                    "req": true,
                    "short": "HTML page permalink URL for the joke",
                    "type": "`$STRING`"
                },
                {
                    "name": "question",
                    "req": true,
                    "short": "The joke question/setup",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "joke",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "tv-rabbit",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/joke/{id}",
                            "segments": [
                                {
                                    "lit": "joke"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "joke",
                                "{id}"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/joke",
                            "segments": [
                                {
                                    "lit": "joke"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "joke"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map