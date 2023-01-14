import { atom, selector } from "recoil";

export const todosState = atom({

    key : "todos",
    default : [
        {
            id : 1,
            text : "todo 리스트 만들기",
            done: true
        },
        
        {
            id : 2,
            text : "recoil 공부하기",
            done: false
        }

    ]


});


export const doneCount = selector({
    key : "doneCount",
    get : ({get}) => { 
        const todos = get(todosState);
        return todos.filter(todo => todo.done).length;        
    }
});



export const totlaCount = selector({
    key : "totlaCount",
    get : ({get}) => { 
        const todos = get(todosState);
        return todos.length;
    }
});




export const filterState = atom({ 
    key : "filterState",
    default : "all"

});


export const filterdTotosState = selector({
    key : "filterdTotosState",
    get : ({get}) => { 
        const filter = get(filterState);
        const todos = get(todosState);

        switch(filter) {  
            case "all"  :
                return todos;
            case "done" : 
                return todos.filter(todo => todo.done);             
            case "undone" :
                return todos.filter(todo => !todo.done);
            default  :
                return todos;
        }

    }
});