const debug = require('debug')('test')

const is = require('../index')
const datas = require('./datas')

describe('is', () => {
	describe('empty', () => {
		datas.empty.valid.forEach((v) => {
			it(`[valid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				debug('r', r)
				expect(r).toBe(true)
			})
		})
		datas.empty.invalid.forEach((v) => {
			it(`[invalid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				debug('r', r)
				expect(r).toBe(false)
			})
		})
	})
})
