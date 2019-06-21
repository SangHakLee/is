const debug = require('debug')('isEmpty')

/**
 * @description Check if parameter is empty
 * 'empty' is an empty string, an empty array, an empty object, null, undefined
 * @param {object} value 
 */
const isEmpty = (value) => {
	debug('value', value)
	debug('typeof value', typeof value)
	debug('Object.keys(value).length', Object.keys(value).length)
	debug('value.constructor.name', value.constructor.name)

	if (value === null) return true
	if (typeof value === 'undefined') return true
	if (typeof value === 'string' && value === '') return true
	if (Array.isArray(value) && value.length < 1) return true // [1]
	if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1) return true // {a:1}
	// if (typeof value === 'object')

	// if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
	// 	return true
	// } 

	debug('isEmpty')
	return false
}

module.exports = isEmpty