import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>  
      <b 
            style={{
            cursor : 'pointer',
            color : user.active ? 'green' : 'black'
          }}
       > 
          {user.username}
    </b> 

    <span>({user.email})</span>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({users , onRemove}) {
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}

      {/* 고유값이 있는 경우 */}
      {users.map(user => (
        <User user={user}  key={user.id} onRemove={onRemove}/>
      ))}

      {/* 고유값이 없는 경우 */}
      {/* {users.map((user,index) => (
        <User user={user}  key={index}/>
      ))} */}
    </div>
  );
}

export default UserList;