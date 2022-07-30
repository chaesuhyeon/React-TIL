// rafce 
import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addView } from '../redux'   //  '../redux/index' 로도 작성해도 됨. index는 생략 가능 

const Views = ({count, addView}) => {
  const [number, setNumber] = useState(1);
  return (
    <div className='items' >
             <h2>조회수 : {count}</h2>
             <input type="text"  value={number} onChange={(e)=>setNumber(e.target.value)}/>
             <button onClick={()=>addView(number)}>조회하기!</button>

    </div>
  )
}

const mapStateToProps = ({views}) => {
  //console.log(state) // rootReducer에 정의해놓은 views와 subscribers가 있고, 그 안에 count가 있음
  return {
    count : views.count // count가 Views의  props으로 전달됨
    //root 
  }
}

// object로 넘겨주는 방법
const mapDispatchToProps = {
  addView : (number)=>addView(number) // addView 라는 property에 addView 매핑
  // addView 이렇게 하나만 작성해도 됨. ES6에서는 property와 value 값이 같으면 생략하여 적을 수 있음
}
export default connect(mapStateToProps, mapDispatchToProps)(Views) // connect사용하여 redux와 연결
