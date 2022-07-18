import React, { useState } from "react";
import {connect} from "react-redux";
import ToDo from "../components/ToDo";
import { actioncreators } from "../store";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();  // submit button  click시 reload 방지
        addToDo(text);
        setText("");
    }
  return (
    <>
        <h2>To Do</h2>
        <form onSubmit={onSubmit}>
            <input type="text" value={text}  onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>{toDos.map(toDo => (<ToDo {...toDo} key={toDo.id}/>))}</ul>
    </>
  );
}

function mapStateToProps(state) {
    return {toDos : state};
} // store로부터 state를 가져오는 함수

function mapDispatchToProps(dispatch){
    return {
        addToDo: (text) => dispatch(actioncreators.addToDo(text))
    };
}

export default connect(mapStateToProps , mapDispatchToProps) (Home); // dispatch는 필요하고 state는 필요하지 않을때, connect (null,  mapDispatchToProps) 라고 적어주면 됨 (null 작성)