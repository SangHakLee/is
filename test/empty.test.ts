import debug from 'debug'
import empty from '../src/empty'
import datas from './datas/empty'

const log = debug('test')
const {valid, invalid} = datas

describe('empty', () => {
	describe('valid', () => {
		valid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				log('r', r)
				expect(r).toBe(true)
			})
		})
	})
	describe('invalid', () => {
		invalid.forEach((v) => {
			it(`empty(${JSON.stringify(v)})`, () => {
				const r = empty(v)
				log('r', r)
				expect(r).toBe(false)
			})
		})
	})
})
