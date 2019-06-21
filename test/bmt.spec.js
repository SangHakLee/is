const debug = require('debug')('test')
const should = require('should')

const my = require('../index')
const underscore = require('underscore')
const lodash = require('lodash')

const modules = [
    {name: 'my', module: my},
    // {name: 'underscore', module: underscore},
    // {name: 'lodash', module: lodash},
]

const valid = [
    '', [], {}
]
const invalid = [
    true, 1, 1.0, 'string', NaN , [1], {a:1}
]

describe('isEmpty', function() {
    modules.forEach((m) => {
        describe(`${m.name}`, () => {
            const module = m.module
            valid.forEach((v) => {
                it(`[valid] isEmpty(${JSON.stringify(v)})`, () => {
                    const r = module.isEmpty(v)
                    debug('r', r)
                    r.should.be.True()
                })
            })
            invalid.forEach((v) => {
                it(`[invalid] isEmpty(${JSON.stringify(v)})`, () => {
                    const r = module.isEmpty(v)
                    debug('r', r)
                    r.should.be.False()
                })
            })
        })
    })
})