import { createContext, useContext, useReducer } from "react";

const initialState = [

    {
        id : 1,
        text : "투두 리스트 스타일링하기",
        done : true,
    },
    {
        id : 2,
        text : "투두 리스트 기능 구현하기",
        done : false,
    },
    {
        id : 3,
        text : "투두 리스트 애니메이션 만들기",
        done : false,
    },
]


function reducer(state, action) { 

    switch(action.type) { 

        // 추가
        case "CREATE" : 
            /* return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    done : false,
                }
            ]; */
            return state.concat({                
                id : action.id,
                text : action.text,
                done : false,
            });


        // 토글
        case "TOGGLE" : 
            return state.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo);


        // 삭제
        case "DELETE" :
            return state.filter(todo => todo.id !== action.id);


        default : 
            return state;
    }


}


// 함수를 만들어 접근하기 때문에 export가 필요 없어짐
const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);


export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error("TodoProvider가 없습니다.");
    } 
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);   
    if (!context) {
        throw new Error("TodoProvider가 없습니다.");
    } 
    return context;
}





export function TodoProvide({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>

    );
}