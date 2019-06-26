// my-reporter.js
const mocha = require('mocha')
const Table = require('easy-table')

module.exports = MyReporter

let result = []

function MyReporter(runner) {
	mocha.reporters.Base.call(this, runner)
	var passes = 0
	var failures = 0

	runner.on('pass', function(test) {
		console.log('test', test)
		passes++
		console.log('pass: %s', test.titlePath())
		// console.log('pass: %s', test.fullTitle())
	})

	runner.on('fail', function(test, err) {
		failures++
		console.log('fail: %s -- error: %s', test.fullTitle(), err.message)
	})

	runner.on('end', function() {
		console.log('end: %d/%d', passes, passes + failures)
	})
}

var data = [
	{ id: 123123, desc: 'Something awesome', price: 1000.00 },
	{ id: 245452, desc: 'Very interesting book', price: 11.45},
	{ id: 232323, desc: 'Yet another product', price: 555.55 }
  ]
   
  var t = new Table
   
  data.forEach(function(product) {
	t.cell('Product Id', product.id)
	t.cell('Description', product.desc)
	t.cell('Price, USD', product.price, Table.number(2))
	t.newRow()
  })
   
  console.log(t.toString())