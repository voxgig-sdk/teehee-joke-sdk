
import { Context } from './Context'


class TeeheeJokeError extends Error {

  isTeeheeJokeError = true

  sdk = 'TeeheeJoke'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TeeheeJokeError
}

