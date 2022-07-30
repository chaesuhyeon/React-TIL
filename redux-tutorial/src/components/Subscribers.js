// rafce 
import React from 'react'
import {connect} from 'react-redux'
import { addSubscriber } from './../redux/index';

const Subscribers = ({count, addSubscriber}) => {
  return (
    <div className='items' >
             <h2>구독자 수 : {count}</h2>
             <button onClick={()=>addSubscriber()}>구독하기!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state) // rootReducer에 정의해놓은 views와 subscribers가 있고, 그 안에 count가 있음
  return {
    count : state.subscribers.count // count가 Subscribers의 props으로 전달됨
    //root 
  }
}

// fuction으로 넘겨주는 방법
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     addSubscriber : () =>dispatch(addSubscriber())
//   }
// }

// object로 넘겨주는 방법
const mapDispatchToProps = {
  addSubscriber : addSubscriber // addSubscriber 라는 property에 addSubscriber를 매핑
  // addSubscriber 이렇게 하나만 작성해도 됨. ES6에서는 property와 value 값이 같으면 생략하여 적을 수 있음
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers) // connect사용하여 redux와 연결
