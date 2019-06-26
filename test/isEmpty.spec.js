const debug = require('debug')('test')
const should = require('should')

const isEmpty = require('../src/isEmpty')
const datas = require('./datas/isEmpty')
const {valid, invalid} = datas


describe('isEmpty', () => {
	describe('valid', () => {
		valid.forEach((v) => {
			it(`isEmpty(${JSON.stringify(v)})`, () => {
				const r = isEmpty(v)
				debug('r', r)
				r.should.be.True()
			})
		})
	})
	describe('invalid', () => {
		invalid.forEach((v) => {
			it(`isEmpty(${JSON.stringify(v)})`, () => {
				const r = isEmpty(v)
				debug('r', r)
				r.should.be.False()
			})
		})
	})
})