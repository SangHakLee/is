# Contributing to is-0

is-0 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 설명합니다.

## 개발 환경 설정

### 요구사항

- Node.js >= 20.0.0
- npm >= 10.0.0
- Git

### 설치

1. 저장소 포크 및 클론
```bash
git clone https://github.com/YOUR_USERNAME/is.git
cd is
```

2. 의존성 설치
```bash
npm install
```

3. TypeScript 빌드
```bash
npm run build
```

4. 테스트 실행
```bash
npm test
```

## 개발 워크플로우

### 1. 브랜치 생성

기능 추가나 버그 수정을 위해 새 브랜치를 생성하세요:

```bash
git checkout -b feature/your-feature-name
# 또는
git checkout -b fix/your-bug-fix
```

### 2. 코드 작성

- TypeScript로 작성 (`src/*.ts`)
- TSDoc 주석 추가
- 타입 안전성 유지 (strict mode)

### 3. 테스트 작성

새로운 기능이나 수정사항에 대한 테스트를 작성하세요:

```bash
# 테스트 파일 위치
test/your-feature.test.ts

# 테스트 데이터 위치
test/datas/your-feature.ts
```

### 4. 로컬 검증

커밋하기 전에 다음을 실행하세요:

```bash
# TypeScript 빌드
npm run build

# ESLint 검사
npm run eslint

# 테스트 실행
npm test

# 커버리지 확인 (최소 75%)
npm run coverage
```

### 5. Git Hooks

프로젝트는 Husky를 사용하여 자동 검증을 수행합니다:

- **pre-commit**: ESLint, 테스트, TypeDoc 자동 실행
- **pre-push**: 커버리지 검사
- **commit-msg**: 커밋 메시지 규칙 검증

## 코딩 규칙

### TypeScript

```typescript
// Good
export function isEmpty(value: any): boolean {
	return empty(value)
}

// Bad - 타입 정의 누락
export function isEmpty(value) {
	return empty(value)
}
```

### TSDoc 주석

모든 public 함수에는 TSDoc 주석을 추가하세요:

```typescript
/**
 * 주어진 값이 empty인지 확인합니다.
 *
 * @param value - 확인할 값
 * @returns 값이 empty면 true, 아니면 false
 *
 * @example
 * ```typescript
 * empty('')        // true
 * empty([])        // true
 * empty({})        // true
 * empty(null)      // true
 * empty(undefined) // true
 * empty('hello')   // false
 * ```
 */
export function empty(value: any): boolean {
	// implementation
}
```

### ESLint 규칙

- **Indentation**: Tab
- **Quotes**: Single quotes
- **Semicolons**: Never
- **Line endings**: LF (Unix)

자동 수정:
```bash
npm run eslint:fix
```

## 커밋 메시지 규칙

프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

### 형식

```
<type>: <subject>

[optional body]

[optional footer]
```

### Type

- `feat:` - 새로운 기능 추가
- `fix:` - 버그 수정
- `docs:` - 문서 변경
- `style:` - 코드 스타일 변경 (포매팅, 세미콜론 등)
- `refactor:` - 코드 리팩토링
- `test:` - 테스트 추가/수정
- `chore:` - 빌드 프로세스, 도구 설정 변경
- `ci:` - CI 설정 변경

### 예시

```bash
# 좋은 예
feat: add isEmail validation function
fix: handle null values in empty check
docs: update README with TypeScript examples
test: add tests for edge cases

# 나쁜 예
update code
fix bug
WIP
```

### Breaking Changes

Breaking change가 있는 경우:

```
feat!: change empty function signature

BREAKING CHANGE: empty() now requires explicit type parameter
```

## Pull Request 절차

### 1. Pull Request 생성

1. 모든 변경사항을 커밋하고 푸시
```bash
git push origin feature/your-feature-name
```

2. GitHub에서 Pull Request 생성

3. PR 템플릿에 따라 설명 작성:
   - 변경사항 요약
   - 관련 이슈 번호
   - 테스트 결과
   - Breaking changes (있는 경우)

### 2. PR 체크리스트

- [ ] TypeScript 빌드 성공 (`npm run build`)
- [ ] 모든 테스트 통과 (`npm test`)
- [ ] 커버리지 요구사항 충족 (75% 이상)
- [ ] ESLint 에러 없음 (`npm run eslint`)
- [ ] TSDoc 주석 추가
- [ ] 테스트 추가/업데이트
- [ ] CHANGELOG.md 업데이트 불필요 (semantic-release가 자동 생성)

### 3. 코드 리뷰

- 리뷰어의 피드백에 응답
- 요청된 변경사항 반영
- CI 검사 통과 확인

### 4. Merge

- 모든 검사를 통과하고 승인을 받으면 maintainer가 merge합니다
- Semantic Release가 자동으로 버전을 업데이트하고 릴리즈합니다

## 테스트 작성

### 테스트 파일 구조

```
test/
├── your-feature.test.ts     # 테스트 파일
└── datas/
    └── your-feature.ts      # 테스트 데이터
```

### 테스트 데이터 작성

```typescript
// test/datas/your-feature.ts
export interface TestData {
	valid: ReadonlyArray<any>
	invalid: ReadonlyArray<any>
}

const data: TestData = {
	valid: [
		// valid한 값들
		'', [], {}, null, undefined
	],
	invalid: [
		// invalid한 값들
		'string', [1], {a: 1}
	]
}

export default data
```

### 테스트 작성

```typescript
// test/your-feature.test.ts
import yourFeature from '../src/your-feature'
import datas from './datas/your-feature'

describe('yourFeature', () => {
	describe('valid cases', () => {
		const {valid} = datas

		it('should return true for valid values', () => {
			valid.forEach((v) => {
				expect(yourFeature(v)).toBe(true)
			})
		})
	})

	describe('invalid cases', () => {
		const {invalid} = datas

		it('should return false for invalid values', () => {
			invalid.forEach((v) => {
				expect(yourFeature(v)).toBe(false)
			})
		})
	})
})
```

### 커버리지 요구사항

프로젝트는 엄격한 커버리지 요구사항이 있습니다:

- Branches: 75%
- Functions: 80%
- Lines: 75%
- Statements: 80%

```bash
npm run coverage
```

## 새로운 검증 함수 추가하기

1. `src/your-feature.ts` 파일 생성
```typescript
/**
 * Your feature description
 *
 * @param value - The value to check
 * @returns true if valid, false otherwise
 */
export default function yourFeature(value: any): boolean {
	// implementation
	return false
}
```

2. `src/index.ts`에 추가
```typescript
import yourFeature from './your-feature'

const modules = {
	empty,
	isEmpty: empty,
	yourFeature, // 추가
}

export = modules
```

3. 테스트 데이터 생성 (`test/datas/your-feature.ts`)

4. 테스트 작성 (`test/your-feature.test.ts`)

5. 빌드 및 테스트
```bash
npm run build
npm test
npm run coverage
```

## 질문이나 도움이 필요하신가요?

- 이슈를 생성해주세요: [GitHub Issues](https://github.com/SangHakLee/is/issues)
- 기존 이슈를 확인해주세요: 같은 질문이 있을 수 있습니다

## 라이선스

기여하신 코드는 프로젝트의 MIT 라이선스를 따릅니다.
