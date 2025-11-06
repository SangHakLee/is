const debug = require('debug')('test')

const empty = require('../src/empty')
const datas = require('./datas/empty')
const {valid, invalid} = datas


describe('empty', () => {
	describe('valid', () => {
		valid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				debug('r', r)
				expect(r).toBe(true)
			})
		})
	})
	describe('invalid', () => {
		invalid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				debug('r', r)
				expect(r).toBe(false)
			})
		})
	})
})
