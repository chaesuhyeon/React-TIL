import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'; // useSelector : store의 상태값을 반환해주는 역할
// useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우, 바뀐 스토어의 상태값을 다시 가져와서 컴포넌트를 랜더링 시킴


function Detail({toDos}) {
    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));  // id같은 것 찾아냄

  return (
    <>
        <h1>{toDo?.text}</h1>
         <h5>Created at : {toDo?.id}</h5>     
         {/*   ?.문법 참고 :   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
    </>
  )
}

function mapStateToProps(state) {
    return { toDos: state };
    }

    export default connect(mapStateToProps)(Detail);



