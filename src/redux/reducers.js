import { ADD_TODO } from "./actionTypes";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                todos:[
                    ...state.todos, {
                        text: action
                    }
                ]
            }
        default:
            break;
    }
}

export default todoReducer;