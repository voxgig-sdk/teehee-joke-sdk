
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TeeheeJokeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TeeheeJokeSDK.test()
    equal(null !== testsdk, true)
  })

})
