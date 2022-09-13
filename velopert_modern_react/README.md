### 벨로퍼트와 함께하는 모던 리액트
> https://react.vlpt.us/
---
##### 프로젝트 생성과 시작
```
npx create-react-app [프로젝트 이름]

<!-- 현재 디렉토리에 생성  -->
npx create-react-app .

npm start (or yarn start)
```

#####  JSX안에 자바스크립트 값 사용하기
- JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 `{}`로 감싸서 보여주면 됨
```
<div>{name}</div>
```

##### style과 className 
###### style 
- 인라인 스타일은 객체 형태로 작성해야 함. 
- background-color 처럼 `-`로 구분되어 있는 이름들은 `backgroundColor`처럼 camelCase형태로 네이밍 해줘야함

###### className
- css class를 설정할 때는 `class=`가 아닌 `className=`으로 설정해줘야함


##### defaultProps로 기본값 설정
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

##### props.children
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

##### useState
- 컴포넌트에서 동적인 값을 `상태(state)`라고 부름
- useState를 사용하면 컴포넌트에서 상태를 관리할 수 있음
```javascript
const [number, setNumber] = useState(0);
```
- 상태의 기본값을 파마리터로 넣어서 호출 (위 코드에서는 기본값 0)
- useState를 호출하면 배열이 반환되는데, 첫 번째 원소는 현재 상태, 두번째 원소는 Setter함수
