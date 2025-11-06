import debug from 'debug'
import is from '../index'
import datas from './datas'

const log = debug('test')

describe('is', () => {
	describe('empty', () => {
		datas.empty.valid.forEach((v) => {
			it(`[valid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				log('r', r)
				expect(r).toBe(true)
			})
		})
		datas.empty.invalid.forEach((v) => {
			it(`[invalid] isEmpty(${JSON.stringify(v)})`, () => {
				const r = is.empty(v)
				log('r', r)
				expect(r).toBe(false)
			})
		})
	})
})
