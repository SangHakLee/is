const debug = require('debug')('test')
const should = require('should')

const my = require('../index')
const underscore = require('underscore')
const lodash = require('lodash')

const datas = require('./datas/isEmpty')

const modules = [
	{name: 'my', module: my},
	// {name: 'old', module: {
	// 	isEmpty: function(value){
	// 		if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
	// 			return true
	// 		}else{
	// 			return false
	// 		}
	// 	}
	// }}
	// {name: 'underscore', module: underscore},
	// {name: 'lodash', module: lodash},
]

const {valid, invalid} = datas

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