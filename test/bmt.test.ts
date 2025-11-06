import debug from 'debug'
import my from '../index'
import datas from './datas/isEmpty'

const log = debug('test')

interface TestModule {
	name: string
	module: {
		isEmpty: (value: unknown) => boolean
	}
}

const modules: TestModule[] = [
	{name: 'my', module: my},
]

const {valid, invalid} = datas

describe('isEmpty', () => {
	modules.forEach((m) => {
		describe(`${m.name}`, () => {
			const module = m.module
			valid.forEach((v) => {
				it(`[valid] isEmpty(${JSON.stringify(v)})`, () => {
					const r = module.isEmpty(v)
					log('r', r)
					expect(r).toBe(true)
				})
			})
			invalid.forEach((v) => {
				it(`[invalid] isEmpty(${JSON.stringify(v)})`, () => {
					const r = module.isEmpty(v)
					log('r', r)
					expect(r).toBe(false)
				})
			})
		})
	})
})
