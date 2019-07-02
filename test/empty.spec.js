const debug = require('debug')('test')
const should = require('should')

const empty = require('../src/empty')
const datas = require('./datas/empty')
const {valid, invalid} = datas


describe('empty', () => {
	describe('valid', () => {
		valid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				debug('r', r)
				r.should.be.True()
			})
		})
	})
	describe('invalid', () => {
		invalid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				debug('r', r)
				r.should.be.False()
			})
		})
	})
})