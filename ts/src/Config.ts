
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TeeheeJoke',
        slug: "teehee-joke",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://teehee.dev/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      joke: {
      },

    }
  }


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
          "name": "permalink",
          "req": true,
          "short": "API permalink URL for the joke",
          "type": "`$STRING`"
        },
        {
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
              "parts": [
                "joke",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/joke",
              "parts": [
                "joke"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

