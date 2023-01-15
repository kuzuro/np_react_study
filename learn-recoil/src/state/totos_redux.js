import { createAction, createReducer, createSelector, createSlice } from "@reduxjs/toolkit";


  
const initialState = [
    {
        id : 1,
        text : "redux 배우기",
        done: true
    },
    {
        id : 2,
        text : "todo 리스트 만들기",
        done: false
    },


];


// 액션의 타입을 변수로 정의
const CREATE = "todos/create";
const TOGGLE = "todos/toggle";
const DELETE = "todos/delete";
const DONC_COUNT = "todos/donc_count";


// 액션을 리턴하는 함수
export const createTodo = (id, text) => {
    return {type : CREATE, id, text}
};

export const toggleTodo = (id) => {
    return {type : TOGGLE, id}
};

export const deleteTodo = (id) => {
    return {type : DELETE, id}
};


// 상태값들중 특정 값을 고르거나 연산해서 리턴
export const getTotalCount = (state) => state.todos.length
export const getDoneCount = (state) => {
    return state.todos.filter(todo => todo.done).length
}


export const getDoneCount2 = createSelector(
    state => state,
    (state) => { return state.todos.filter(todo => todo.done).length }
);


// @reduxjs/toolkit 의 createSelector 를 사용하면 같은 값이 들어왔을때 연산을 하지 않는다
// 즉, 성능향상에 도움이 된다.
export const getPercentage = createSelector(
    state => state.todos.length,
    getDoneCount,
    (totlaCount, doneCount) => { 
        return totlaCount === 0 ? 0 : Math.floor(doneCount / totlaCount * 100);
    }

);


//export const todosReducer02 = createReducer

export const todos_toggle = createAction("todos/toggle");


export const crateTodoAction = createAction("todos/create");
export const removeTodoACtion = createAction("todos/delete");


export const todosReducer02 = createReducer(initialState, (builder) =>  {
    builder
        .addCase(crateTodoAction, (state, action) => {
            const {id, text} = action.payload;
            state.push({
                id : id,
                text : text,
                done : false
            });
        })
        .addCase(removeTodoACtion, (state, action) => {            
            return state.filter(todo => todo.id !== action.payload);
        })

    
});






export function todosReducer (state = initialState, action) {

    switch(action.type) { 
        
        case CREATE : 
            return state.concat({
                id : action.id,
                text : action.text,
                done : false
            });
      

        case TOGGLE :
            return state.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo);
        

        case DELETE :
            return state.filter(todo => todo.id !== action.id);

        default :
            return state;
    
  
    }
  
  }



  const todosSlice = createSlice({
    name : "todos",
    initialState : initialState,
    reducers : { 
        todoCreate : (state, action) => {
            const {id, text} = action.payload;
            state.push({
                id : id,
                text : text,
                done : false
            });
        },
        todoToggle : (state, action) => { 
            const {id} = action.payload;
            //return state.map(todo => todo.id === id ? {...todo, done : !todo.done} : todo);
            
            const todo = state.find(todo => todo.id === id);
            todo.done = !todo.done    
        },
        todoDelete : (state, action) => {
            const {id} = action.payload;
            return state.filter(todo => todo.id !==id);
        }

    }


  });

  
export const { todoCreate, todoToggle, todoDelete } = todosSlice.actions;
//export const counterReducer03 = counterSlice.reducer;
export default todosSlice.reducer;
