
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TeeheeJokeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TeeheeJokeSDK.test()
    equal(testsdk instanceof TeeheeJokeSDK, true,
      'TeeheeJokeSDK.test() must return a client synchronously')
  })

})
