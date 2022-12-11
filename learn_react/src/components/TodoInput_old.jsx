


// Todo, TodoInput, TodoList 로 분리
// 역할 별로 컴포넌트를 분리해야 한다.


import { useState, useRef, useEffect, useMemo, useCallback } from "react";


function countUndoneTodo(todos) {
    console.log("할일 세는중");
    return todos.filter(todo => !todo.done).length;
}


function TodoInput() {


    
    //const [todos, setTodos] = useState(["투두 리스트 만들기", "리액트 배우기"]);

    // 리액트에서는 dom에 접근하지 않고 상태관리를 이용해 접근한다.
    // const [input, setInput] = useState("");


    // 여러개의 input을 관리하기 위해 객체로 관리
    const [todos, setTodos] = useState([{
        id : 1,
        text : "투두 리스트 만들기",
        date : "2022/12/11",
        done : true
    }]);

    //const [curruntId, setCurruntId] = useState(2);  // id값 제어

    
    const [inputs, setInputs] = useState({
        //id : nextId.current,
        text : "",
        date : ""
    });



    /*
    useEffect(() => { 
        // userMemo와 비슷하지만 이 블록의 코드 전체를 재실행함
        const undoneTodoCount = countUndoneTodo(todos);
        console.log(undoneTodoCount);
    }, [todos])
    */

    // useMemo 특정 값이 변할때만 연산을 하고, 나머지 경우는 '기존값'을 재사용. 성능개선
    // 값만 재사용하고
    const undoneTodoCount = useMemo(() => countUndoneTodo(todos), [todos]);// countUndoneTodo(todos);
    console.log(undoneTodoCount);


    // ref="Ref변수명"으로 dom에 직접 접근할 수 있다.
    const inputRef = useRef();
    

    // useRef로 관리되는 값은 변경되어도 리렌더링 되지 않는다.
    const nextId = useRef(2);  // id값 제어

    // useRef가 되면 일반 js의 전역변수처럼 사용하는것과 비슷하다.
    // 렌더링과 별개로 변수를 사용하고자 할때 사용한다.



    // useCallback : 함수를 재사용할때 사용
    const handleInput = useCallback((e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name] : value            
        });
    }, [inputs]);



    const handleSubmit = useCallback(() => {
        setTodos([
            ...todos,
            {
                id:nextId.current, 
                text:inputs.text,
                date:inputs.date,
                done : false
            }
        ]);


        setInputs({
            text:"", 
            date:""
        }); 
        inputRef.current.focus();

        nextId.current += 1;


    }, [inputs, todos]);





    // const handleInput = (e) => {
    //     //console.log("입력된 태그의 네임", "입력된 내용");
    //     //console.log(e.target.name, e.target.value);

    //     // 비구조화 할당
    //     const { name, value } = e.target;

    //     setInputs({
    //         ...inputs,
    //         [name] : value            
    //     });

    //     // 객체 프로퍼티 참조 하는 방법 2가지
    //     // 1. 대괄호 표기법
    //     // 2. 점 표기법
    // };


//     const handleSubmit = () => {
//         /* 
//         todos.push(input);  // 객체가 변경된걸 제대로 인지 못한다        
//         setTodos(todos);
//          */

//         // 펼침 연산자(스프레드) e등 이용해 객체나 배열을 업데이트할때에는 새로운 객체를 생성하는 방식으로 작성해야한다
//         //setTodos([...todos, inputs]);
//         //setTodos(todos.concat(inputs.text));  // concat : 인자로 주어진 값이나 배열을 합쳐서 '새 배열'로 반환
//         // 불변성을 지키지 않으면 상태변화를 감지할 수 없다.
//         /* 
//         setTodos(todos.concat({
//             id:nextId.current, 
//             text:inputs.text,
//             date:inputs.date,
//             done : false
//         }));
//  */
//         setTodos([
//             ...todos,
//             {
//                 id:nextId.current, 
//                 text:inputs.text,
//                 date:inputs.date,
//                 done : false
//             }
//         ]);


//         setInputs({
//             text:"", 
//             date:""
//         });  // input변수값을 초기화


//         // text에 포커스 (특정 dom 접근)
//         inputRef.current.focus();
//         //document.querySelector("input[name='text']").focus(); 

//         //setCurruntId(curruntId + 1);

//         nextId.current += 1;


//     };

    

    const onRemove = (id) => {        

        // filter가 새로운 함수를 생성하는것이므로 그대로 사용해도 된다.
        //setTodos(todos.filter((_, index) => index !== id));
        setTodos(todos.filter(todo => todo.id !== id));
        inputRef.current.focus(); 
    };


    // todo의 done값을 변경하는 함수
    const onToggle = (id) => { 

        setTodos(todos.map(todo => {
            // if(todo.id === id){
            //     return {
            //         /*
            //         id : todo.id,
            //         text : todo.text,
            //         date : todo.date,
            //         */
            //         // 생략가능
            //         ...todo,
            //         done : !todo.done
            //     }
            // } else {
            //     return todo;
            // }

            // 삼항으로 줄여쓰기
            return todo.id === id ? {...todo, done : !todo.done} : todo;
        }));

        inputRef.current.focus(); 

    };



    return (


        <div>
            <input type="text" onChange={handleInput} value={inputs.text} name="text" ref={inputRef}/>  {/* 현재 input변수의 값이 value로 들어감 */}

            <input type="text" onChange={handleInput} value={inputs.date} name="date"/> 

            <button type="button" onClick={handleSubmit}>등록</button>


            <ul>
                {/* <li>리액트 기본 문법 배우기</li> */}

                {/* 
                    텍스트 배열을 jsx문법으로 바꿔야하기 때문에 Array.map을 사용 
                    map은 고유한 키값을 필요로 한다.
                */}
                {todos.map((todo) => 
                    <li key={todo.id} style={{textDecoration : todo.done && "line-through"}} onClick={() => onToggle(todo.id)}> 
                        {todo.text} ({todo.date}) 

                        {/* <button type="button" onClick={() => onToggle(todo.id)}>완료 </button> */}

                        <button type="button" onClick={(e) => {
                                    e.stopPropagation(); // 부모 이벤트를 발생시키지 않는다.
                                    onRemove(todo.id)
                                }
                            }>삭제</button>
                    </li>
                )}

            </ul>
        </div>

    );
}


export default TodoInput;