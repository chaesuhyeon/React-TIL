import React from 'react'
import {connect} from "react-redux";
import { actioncreators } from '../store';
import {Link} from "react-router-dom";
 
function ToDo({text , onBtnClick , id}) {
  return (
        <li>
              <Link to={`/${id}`}>{text} </Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
  )
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onBtnClick:() => dispatch(actioncreators.deleteToDo(ownProps.id))  // 삭제할 때  id가 필요한데, 이미 id를 ownProps가 갖고 있기 때문에 이렇게 적어줌
        }
}
export default connect(null, mapDispatchToProps) (ToDo);