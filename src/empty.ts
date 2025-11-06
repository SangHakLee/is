/**
 * @module is
 * @author sanghak,Lee <code.ryan.lee@gmail.com>
 */

/**
 * Check if parameter is empty.
 *
 * 'empty' means:
 *   - an empty string
 *   - an empty array
 *   - an empty object (**allow `new Proxy({}, {})`**)
 *   - null
 *   - undefined
 *
 * @param value - The parameter to check
 * @returns True if the parameter is empty, false otherwise
 *
 * @example
 * ```typescript
 * import empty from 'is-0'
 * empty('') // true
 * empty(1) // false
 * ```
 */
const empty = (value: unknown): boolean => {
	if (value === null) return true
	if (typeof value === 'undefined') return true
	if (typeof value === 'string' && value === '') return true
	if (Array.isArray(value) && value.length < 1) return true

	if (
		typeof value === 'object' &&
		value.constructor.name === 'Object' &&
		Object.keys(value).length < 1 &&
		Object.getOwnPropertyNames(value).length < 1
	) {
		return true
	}

	// new String()
	if (
		typeof value === 'object' &&
		value.constructor.name === 'String' &&
		Object.keys(value).length < 1
	) {
		return true
	}

	return false
}

export default empty
