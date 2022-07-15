import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count=0 , action) =>{
  switch (action.type) {
    case ADD:  // action.type이 ADD면 count + 1
      return count + 1;

    case MINUS :  // action.type이 MINUS면 count - 1
      return count -1;
    
    default :  // 둘다 아니면 count 를 return
      return count;
  }


  // 위 코드는 아래 코드 개선 //

  // if (action.type === "ADD"){
  //     return count + 1;
  // } else if(action.type === "MINUS") {
  //     return count -1;
  // } else {
  //    return count;
  // }
};

const countStore = createStore(countModifier) ;

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () =>{
  countStore.dispatch({type: ADD}) ; //dispatch안에 적어주는 action은 반드시 object일 것 , string 안됨!
};

add.addEventListener("click", handleAdd);  // dispatch :  reducer에 action보내기
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));  // dispatch :  reducer에 action보내기
