module.exports = {
	valid: Object.freeze([
		'', [], {},
		new String(), new Array(), new Object(),
		undefined, null,
		``, `${''}`,
		new Proxy({}, {})
	]),
	invalid: Object.freeze([
		true, false, new Boolean(),
		new Number(), NaN, new Date(), new RegExp(), new Error(),
		Math,
		1, 1.0, 'string' , [1], {a:1},
		`${1}`,
		new Function(), function() {}, function f() {}, function*() {},
		class MyClass {},
		Symbol, Symbol(),
		new Map(), new WeakMap(), new Set(), new WeakSet(),
		Proxy, Reflect,
		Promise, new Promise(() => {}),
		ArrayBuffer, new ArrayBuffer(),
		DataView, new DataView(new ArrayBuffer())
	])
}