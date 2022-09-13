## 벨로퍼트와 함께하는 모던 리액트
> https://react.vlpt.us/
---
#### 프로젝트 생성과 시작
```
npx create-react-app [프로젝트 이름]

<!-- 현재 디렉토리에 생성  -->
npx create-react-app .

npm start (or yarn start)
```
<br>

####  JSX안에 자바스크립트 값 사용하기
- JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 `{}`로 감싸서 보여주면 됨
```
<div>{name}</div>
```
<br>

#### style과 className 
##### style 
- 인라인 스타일은 객체 형태로 작성해야 함. 
- background-color 처럼 `-`로 구분되어 있는 이름들은 `backgroundColor`처럼 camelCase형태로 네이밍 해줘야함

##### className
- css class를 설정할 때는 `class=`가 아닌 `className=`으로 설정해줘야함


<br>

#### defaultProps로 기본값 설정
- 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 `defaultProps`라는 값을 설정하면 됨
```javascript
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```

<br>

#### props.children
- 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때 `props.children`을 조회하면 됨
```javascript
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```

<br>

#### useState
- 컴포넌트에서 동적인 값을 `상태(state)`라고 부름
- useState를 사용하면 컴포넌트에서 상태를 관리할 수 있음
```javascript
const [number, setNumber] = useState(0);
```
- 상태의 기본값을 파마리터로 넣어서 호출 (위 코드에서는 기본값 0)
- useState를 호출하면 배열이 반환되는데, 첫 번째 원소는 현재 상태, 두번째 원소는 Setter함수


<br>

#### 리액트 상태에서 객체 수정하기
```javascript
inputs[name] = value;
```
이런식으로 직접 수정하면 안됨

```javascript
setInputs({
  ...inputs,
  [name]: value
});
```
- 이런식으로 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이를 상태로 사용해야 함
-  **리액트에서 객체를 업데이트 하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 함**

<br>

#### useRef로 특정 DOM 선택하기
- ex) 특정 앨리먼트의 크기를 가져오는 경우 , 스크롤바의 위치를 가져오거나 설정해야하는 경우, 포커스를 설정해줘야하는경우
- ref 사용
- `useRef()`를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 `ref`값으로 설정해줘야 함. 그러면 Ref객체의 `current`값은 우리가 원하는 DOM을 가리키게 됨


<br>

#### 배열 랜더링
- 동적인 배열을 랜더링해야할 때는 자바스크립트 배열의 내장함수 `map()`을 사용
- 리액트에서 배열을 랜더링 할 때에는 `key`라는 props를 설정해야함(고유한 값이어야 함)
    - 만약 배열안의 원소가 가지고 있는 고유한 값이 없다면 map()함수를 사용할 때 설정하는 콜백함수의 두 번째 파라미터 `index`를 key로 사용하면 됨
    


