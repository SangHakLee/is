// const debug = require('debug')('empty')

/**
 * @module is
 * @author sanghak,Lee <code.ryan.lee@gmail.com>
 */

/**
 * @description Check if parameter is empty.
 * 
 * 'empty' means 
 *   - an empty string
 *   - an empty array
 *   - an empty object (**allow `new Proxy({}, {})`**)
 *   - null
 *   - undefined
 * @param {object} value parameter
 * @returns {boolean}
 * @example
 * const is = require('is-0')
 * is.empty('') // true
 * is.empty(1) // false
 */
const empty = (value) => {
	// debug('value', value)
	// debug('typeof value', typeof value)
	// debug('Object.keys(value).length', value && Object.keys(value).length)
	// debug('Object.getOwnPropertyNames()', value && Object.getOwnPropertyNames(value))
	// debug('value.constructor.name', value && value.constructor && value.constructor.name)

	if (value === null) return true
	if (typeof value === 'undefined') return true
	if (typeof value === 'string' && value === '') return true
	if (Array.isArray(value) && value.length < 1) return true
	if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) return true

	if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) return true // new String()

	// debug('isEmpty false')
	return false
}

module.exports = empty