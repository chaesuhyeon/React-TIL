
//import Counter from './Counter';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
//import InputSample from './InputSample';
//import InputSample2 from './InputSample2';
import React, { useRef, useState,useMemo , useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';


function countActiveUsers(users){
  console.log("활성 사용자 수를 세는 중");
  return users.filter(user=>user.active).length;
}


function App() {

  const [inputs, setInputs] = useState({
    username : '',
    email:''
  });
  
  const {username, email} = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ // 함수형 업데이트
      ...inputs,
      [name]: value
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ])

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user)); // 함수형 업데이트

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));  // 함수형 업데이트
  }, []);
  
  const onToggle = useCallback(id => {
    setUsers(users => // 함수형 업데이트
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(()=> countActiveUsers(users), [users]);

  return (
    // <Wrapper>
    //     <Hello name="react" color ="red" isSpecial/>  {/*  props를 이름만 작성하고 값 설정을 생략하면 이를 true로 설정한  것으로 간주 */}
    //     <Hello color="pink"/>    
    // </Wrapper>
    <div>
      {/* <Counter /> */}
      {/* <InputSample /> */}
      {/* <InputSample2/> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users = {users} onRemove={onRemove}  onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}

export default App;




