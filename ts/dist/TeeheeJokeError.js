"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeeheeJokeError = void 0;
class TeeheeJokeError extends Error {
    isTeeheeJokeError = true;
    sdk = 'TeeheeJoke';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TeeheeJokeError = TeeheeJokeError;
//# sourceMappingURL=TeeheeJokeError.js.map