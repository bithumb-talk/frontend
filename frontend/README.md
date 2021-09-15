## Start project

```bash
yarn install
yarn start
```

## Coding Convention

- airbnb rule
- prettier
- variable
  - `var` 사용 금지
  - `let` 지양
  - `const` 지향
- 데이터 추가, 수정, 삭제시 불변성 지키기
- `return` 안에 참조타입(변수, 객체, 배열 등) 직접 선언하지 않기

```javascript
// bad👎🏻
return (
  <>
  	<Title>{title is..}</Title>
	  <ShowPost postClick={()=>{console.log('click handler')}} />
  </>
)
```

```javascript
// good👍🏻
const onPostClick = ()=>{console.log('click handler')};

return (
  <>
  	<Title>{title is..}</Title>
	  <ShowPost postClick={onPostClick} />
  </>
)
```

- 상수는 `const CONSTANTS_NAME = 'name'` 로 선언

## Directory

```
src
  ㄴ api : api 관리
  ㄴ assets : 이미지 등의 정적파일 관리
  ㄴ components : 페이지 구성이 되는 컴포넌트 관리
  ㄴ constants : 상수 관리
  ㄴ hooks : React Custom Hooks 관리
  ㄴ pages : 페이지 view 관리
  ㄴ utils : 컴포넌트 로직을 제외한 util 로직 관리
```

## Library

- Axios
- Material UI
- react-router-dom
- Redux
  - Redux Toolkit
  - Redux Saga
  - react-redux
- Storybook

```bash
yarn storybook
```
