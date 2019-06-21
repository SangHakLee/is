const debug = require('debug')('test')

const isEmpty = require('../src/isEmpty')

describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function() {
        const result = isEmpty(1)
        // const result2 = isEmpty()
        debug('result', result)
      })
    })
})