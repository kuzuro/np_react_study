import { createContext, useContext, useReducer } from "react";



export const TodoStateContext = createContext(null);
export const DispatchContext = createContext(null);

// 초기값
const initialState = [

    {
        id : 1,
        text : "리액트 배우기",
        done : true,
    },
    {
        id : 2,
        text : "투두 리스트 만들기",
        done : false,
    },
    {
        id : 3,
        text : "투두 리스트 꾸미기",
        done : false,
    },
]



function reducer(state, action) {

    switch(action.type) {

        case "CREATE_TODO" :    
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    done : false
                }
            ]

        case "TOGGLE_TODO" :
            return state.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo);

        case "REMOVE_TODO" : 
            return state.filter(todo => todo.id !== action.id);           

        default :
            return state;
    }
}

export function useTodoState() {
    return useContext(TodoStateContext);
}


export function useTodoDispatch() {
    return useContext(DispatchContext);
}



export function TodoProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}