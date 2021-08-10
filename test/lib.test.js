var lib = require('../lib')
var expect = require('chai').expect

const bar = () => 42
describe('lib', () => {
    describe('returns42', () => {
        expect(lib.returns42()).to.equal(42)
    })
})
