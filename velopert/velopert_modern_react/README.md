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
- 배열의 불변성을 유지하면서 배열을 업데이트 할 때도 `map`함수를 사용할 수 있음
```javascript
const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
```
- setUser 안에서 map함수를 실행하여 return 된 새로운 배열이 결국 setUser에 입력되어 toggle 시 배열이 바뀌는 것

<br>

### useEffect를 사용하여 마운트/언마운트/업데이트시 할  작업 설정하기
- `useEffect`를 사용할 때에는 첫번째 파라미터에는 `함수`, 두번째 파라미터에는 `의존값이 들어있는 배열`(deps)을 넣음
- `deps`배열을 비우게 된다면, 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 호출 됨
- `useEffect` 에서는 함수를 반환할 수 있는데 이를 `cleanup`함수라고 부름. deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup함수가 호출됨 (useEffect 안에서 return할 때 실행됨)
```javascript
  useEffect(()=> {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    }
  }, []);
```
- `deps`에 특정 값을 넣게 되면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고 ,지정한 값이 바뀔 때에도 호출이 됨. 그리고 deps안에 특정 값이 있다면 언마운트시에도 호출이 되고, 값이 바뀌기 직전에도 호출이 됨
```javascript
  useEffect(()=> {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user가 바뀌기 전...");
      console.log(user);
    }
  }, [user]);
```
- useEffect 안에서 사용하는 상태나 , props가 있다면, useEffect의 deps에 넣어줘야 함. 만약에 넣지 않는다면 useEffect에 등록한 함수가 실행 될 때 최신 props 상태를 가르키지 않게 됨
- deps파라미터를 생략한다면 , 컴포넌트가 랜더링 될 때 마다 호출이 됨
```javascript
  useEffect(()=> {
    return () => {

      console.log(user);
    }
  })
```
- 참고로 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 랜더링 되면 자식 컴포넌트 또한 랜더링 됨(바뀐 내용이 없을지라도)

<br>

### useMemo를 사용하여 연산한 값 재사용하기
- 첫 번째 파라미터에는 어떻게 연산할지 정의하는 `함수` 
- 두 번째 파라미터에는 `deps 배열`
- 배열 안에 넣은 내용이 바뀌면 , 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됨
```javascript
function countActiveUsers(users){
  console.log("활성 사용자 수를 세는 중");
  return users.filter(user=>user.active).length;
}

  const count = useMemo(()=> countActiveUsers(users), [users]);
```

### useCallback을 사용하여 함수 재사용하기
- useMemo는 특정 결과값을 재사용할 때 사용했다면 useCallback은 `특정 함수`를 새로 만들지 않고 `재사용` 하고 싶을 때 사용
- **주의할 점**  : 함수 안에서 사용하는 `상태` or `props`가 있다면 `deps배열에  포함`시켜야 함(포함시키지 않으면 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조 할 것이라고 보장할 수 없음)  . props로 받아온 함수가 있다면 이 또한 deps에 넣어줘야 함
```javascript
  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
```

### React.memo를 사용한 컴포넌트 리렌더링 방지
- 컴포넌트의 props가 바뀌지 않았다면 , 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있음
사용법은 export할 때 React.memo로 감싸주기만 하면 됨 
```javascript
  export default React.memo(CreateUser);
```
- 함수형 업데이트 사용
```javascript
  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));  // 함수형 업데이트
  }, []);
```


