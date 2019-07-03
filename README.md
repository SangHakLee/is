# is

[![npm version](https://badge.fury.io/js/is-0.svg)](https://badge.fury.io/js/is-0)
[![Build Status](https://travis-ci.org/SangHakLee/is.svg?branch=master)](https://travis-ci.org/SangHakLee/is)
[![Coverage Status](https://coveralls.io/repos/github/SangHakLee/is/badge.svg?branch=master)](https://coveralls.io/github/SangHakLee/is?branch=master)

[![NPM](https://nodei.co/npm/is-0.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-0/)

# Usage

## Install
```bash
$ npm i is-0 
```

```javascript
const is = require('is-0')
```

## Example
### empty
```javascript
is.empty('')
is.empty(new String())
is.empty(``)
is.empty(${``})

is.empty([])
is.empty(new Array())

is.empty({})
is.empty(new Object())

is.empty(null)
is.empty(undefined)
```

### not empty
```javascript
is.empty(1)
is.empty('string')
is.empty([1])
is.empty({a:1})
is.empty(true)
is.empty(false)

is.empty(new Date())
// other objects, except `new Object()`
```
- check `./test/datas/empty.js`

## Tests
```bash
npm test
```