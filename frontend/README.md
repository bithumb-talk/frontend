## Start project

```bash
yarn install
yarn start
```

## Coding Convention

- alias
  - `./src/` -> `@/`
  - ex) './src/App.jsx -> @/App.jsx'
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

# File

- `View`와 관련된 파일은 `jsx` 확장자를 사용하며 CamelCase를 사용합니다.
- 그 외 util, constant 등의 파일은 `js` 확장자를 사용하며 lowCamelCate를 사용합니다.
- Style 파일은 `style.js` 확장자를 사용합니다.
- Storybook 파일은 `stories.jsx` 확장자를 사용합니다.

## Directory

```
src
  ㄴ api : api 관리
  ㄴ assets : 이미지 등의 정적파일 관리
  ㄴ components : 페이지 구성이 되는 컴포넌트 관리
  ㄴ constants : 상수 관리
  ㄴ hooks : React Custom Hooks 관리
  ㄴ pages : 페이지 view 관리
  ㄴ redux : Redux store, reducer 관리
  ㄴ router: React route 관리
  ㄴ utils : 컴포넌트 로직을 제외한 util 로직 관리
```

- Router
  - `Router.jsx`의 routes Array에 path, component, isPrivate를 추가하여 route를 적용합니다.
  - `PrivateRoute.jsx`는 로그인 유무에 따라, 기능이 변하는 route를 적용하며, Token이 없을 경우 로그인 페이지로 Redirect됩니다.
    - 아직 기능 확인은 해보지않아 오류가 있을 수 있습니다.
  - `routePath.js`에 route path name을 지정하여, constant로 사용합니다.
  - `NotFound` 페이지는 항상 route 배열의 마지막에 위치해야합니다.

## Library

- Axios
- Material UI
- react-router-dom
- Redux
  - Redux Toolkit
  - Redux Saga
  - react-redux
- Storybook
- Craco

```bash
yarn storybook
```
