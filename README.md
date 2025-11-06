# is

[![npm version](https://badge.fury.io/js/is-0.svg)](https://badge.fury.io/js/is-0)
[![CI](https://github.com/SangHakLee/is/actions/workflows/node.js.yml/badge.svg)](https://github.com/SangHakLee/is/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/SangHakLee/is/branch/master/graph/badge.svg)](https://codecov.io/gh/SangHakLee/is)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

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