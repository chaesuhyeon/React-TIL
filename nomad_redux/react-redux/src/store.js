import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
    return {
        type : ADD,
        text
    };
};

const deleteToDo = id => {
    return {
        type : DELETE,
        id : parseInt(id)
    }
}


const reducer = (state = [] , action) => {
    switch(action.type) {
        case ADD:
            return [{text: action.text , id: Date.now()},  ...state];  //새로운 text + 기존 text(todo들) 

        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);  //action.id와 같지 않은 toDo만 filter해서 보여주기
        
            default:
            return state;
        }
};

const store = createStore(reducer);

export const actioncreators = {
    addToDo,
    deleteToDo
}

export default store;