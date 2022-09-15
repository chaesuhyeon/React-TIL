## 벨로퍼트와 함께하는 모던 리액트
> https://react.vlpt.us/
---
### 프로젝트 생성과 시작
```
npx create-react-app [프로젝트 이름]

<!-- 현재 디렉토리에 생성  -->
npx create-react-app .

npm start (or yarn start)
```
<br>

###  JSX안에 자바스크립트 값 사용하기
- JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 `{}`로 감싸서 보여주면 됨
```
<div>{name}</div>
```
<br>

### style과 className 
#### style 
- 인라인 스타일은 객체 형태로 작성해야 함. 
- background-color 처럼 `-`로 구분되어 있는 이름들은 `backgroundColor`처럼 camelCase형태로 네이밍 해줘야함

#### className
- css class를 설정할 때는 `class=`가 아닌 `className=`으로 설정해줘야함


<br>

### defaultProps로 기본값 설정
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

### props.children
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

### useState
- 컴포넌트에서 동적인 값을 `상태(state)`라고 부름
- useState를 사용하면 컴포넌트에서 상태를 관리할 수 있음
```javascript
const [number, setNumber] = useState(0);
```
- 상태의 기본값을 파마리터로 넣어서 호출 (위 코드에서는 기본값 0)
- useState를 호출하면 배열이 반환되는데, 첫 번째 원소는 현재 상태, 두번째 원소는 Setter함수


<br>

### 리액트 상태에서 객체 수정하기
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

### useRef로 특정 DOM 선택하기
- ex) 특정 앨리먼트의 크기를 가져오는 경우 , 스크롤바의 위치를 가져오거나 설정해야하는 경우, 포커스를 설정해줘야하는경우
- ref 사용
- `useRef()`를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 `ref`값으로 설정해줘야 함. 그러면 Ref객체의 `current`값은 우리가 원하는 DOM을 가리키게 됨


<br>

### useRef로 컴포넌트 안의 변수 만들기
- `useRef` Hook은 DOM을 선택하는 용도 외에도 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 수 있음
- useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
- 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고나서 그 다음 랜더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있음
- 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있음
    - `setTimeout`, `setInterval`을 통해서 만들어진 `id` 
    - 외부 라이브러리를 사용하여 생성된 인스턴스
    - scroll 위치
- useRef를 사용할 때 파라미터를 넣어주면 이 값이 `.current`값의 기본 값이 됨 /  (ex)`const nextId = useRef(4);`
- 이 값을 수정 할 때에는 .current값을 수정하면 되고, 조회 할 때는 .current를 조회하면 됨


<br>

### 배열 랜더링
- 동적인 배열을 랜더링해야할 때는 자바스크립트 배열의 내장함수 `map()`을 사용
- 리액트에서 배열을 랜더링 할 때에는 `key`라는 props를 설정해야함(고유한 값이어야 함)
    - 만약 배열안의 원소가 가지고 있는 고유한 값이 없다면 map()함수를 사용할 때 설정하는 콜백함수의 두 번째 파라미터 `index`를 key로 사용하면 됨


<br>

### 배열에 항목 추가하기
1. `spread`연산자 사용
2. `concat`함수 사용
    - concat함수는 기존의 배열을 수정하지 않고 새로운 원소가 추가된 새로운 배열을 만들어 줌
    
```javascript
setUsers([...users, user]) // spread 연산자 이용
setUsers(users.concat(user)) // concat 함수 이용
```

<br>


### 배열에 항목 제거하기
- 배열에 항목 추가할 때와 마찬가지로 불변성을 지켜가며 업데이트를 해줘야함
- 불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 `filter` 배열 내장 함수를 사용하는 것이 가장 편한 방법
  - `filter`함수는 배열에서 특정 조건이 만족하는 원소들만 추출하여 새로운 배열을 만들어 줌


<br>

### 배열에 항목 수정하기