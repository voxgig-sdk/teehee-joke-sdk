import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/joke/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "tv-rabbit"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "question": "What does a television have in common with a rabbit?",
      "answer": "His ears!",
      "id": "tv-rabbit",
      "permalink": "https://teehee.dev/api/joke/tv-rabbit",
      "permalink_html": "https://teehee.dev/joke/tv-rabbit"
    },
    "idField": "id"
  },
  {
    "entity": "joke",
    "accessor": "Joke",
    "op": "load",
    "method": "GET",
    "path": "/joke",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "question": "What does a television have in common with a rabbit?",
      "answer": "His ears!",
      "id": "tv-rabbit",
      "permalink": "https://teehee.dev/api/joke/tv-rabbit",
      "permalink_html": "https://teehee.dev/joke/tv-rabbit"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
