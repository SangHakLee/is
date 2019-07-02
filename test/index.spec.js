const debug = require('debug')('test')
const should = require('should')

const is = require('../index')
const datas = require('./datas')

describe('is', () => {
	describe('empty', () => {
		datas.empty.valid.forEach((v) => {
			it(`[valid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				debug('r', r)
				r.should.be.True()
			})
		})
		datas.empty.invalid.forEach((v) => {
			it(`[invalid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				debug('r', r)
				r.should.be.False()
			})
		})
	})
})