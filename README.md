# is

[![npm version](https://badge.fury.io/js/is-0.svg)](https://badge.fury.io/js/is-0)
[![CI](https://github.com/SangHakLee/is/actions/workflows/node.js.yml/badge.svg)](https://github.com/SangHakLee/is/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/SangHakLee/is/branch/master/graph/badge.svg)](https://codecov.io/gh/SangHakLee/is)
[![semantic-release: conventionalcommits](https://img.shields.io/badge/semantic--release-conventionalcommits-1890ff?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/is-0.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-0/)

값이 empty인지 확인하는 단순하고 강력한 함수를 제공합니다.

## Installation

```bash
npm install is-0
```

<details><summary>From GitHub Packages</summary>

먼저 `.npmrc` 파일을 생성하거나 수정하세요:
```bash
@SangHakLee:registry=https://npm.pkg.github.com
```

그리고 GitHub Personal Access Token으로 인증:
```bash
npm login --scope=@SangHakLee --registry=https://npm.pkg.github.com
```

패키지 설치:
```bash
npm install @SangHakLee/is-0
```
</details>

## Usage

### JavaScript (CommonJS)
```javascript
const is = require('is-0')

console.log(is.empty(''))        // true
console.log(is.empty([]))        // true
console.log(is.empty({}))        // true
console.log(is.empty(null))      // true
console.log(is.empty(undefined)) // true

console.log(is.empty('hello'))   // false
console.log(is.empty([1, 2, 3])) // false
console.log(is.empty({ a: 1 }))  // false
```

### TypeScript
```typescript
import * as is from 'is-0'

const value: any = ''
if (is.empty(value)) {
  console.log('Value is empty')
}
```

## API

### `is.empty(value: any): boolean`

주어진 값이 "empty"인지 확인합니다.

**Empty로 판단되는 값:**
- 빈 문자열: `''`, `new String()`, ` `` `
- 빈 배열: `[]`, `new Array()`
- 빈 객체: `{}`, `new Object()`
- `null`
- `undefined`

**Empty가 아닌 값:**
```javascript
is.empty(1)           // false - 숫자
is.empty('string')    // false - 문자열
is.empty([1])         // false - 배열 (요소 있음)
is.empty({a: 1})      // false - 객체 (프로퍼티 있음)
is.empty(true)        // false - boolean
is.empty(false)       // false - boolean
is.empty(new Date())  // false - Date 객체
is.empty(new Map())   // false - Map 객체
```

**특수 케이스:**
```javascript
is.empty(new Proxy({}, {}))  // true - 빈 Proxy는 empty로 판단
```

더 많은 예제는 [`./test/datas/empty.ts`](./test/datas/empty.ts)를 참고하세요.

### `is.isEmpty(value: any): boolean`

`is.empty()`의 별칭입니다. 동일하게 동작합니다.

## Development

### Requirements
- Node.js ≥ 20.0.0
- npm ≥ 10.0.0

## Contributing

기여를 환영합니다! 자세한 내용은 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고하세요.

## License

MIT © [SangHak Lee](https://github.com/SangHakLee)