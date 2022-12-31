import axios from "axios";
import { useEffect, useInsertionEffect, useRef, useState } from "react";

function Todos() {

    const [todos, setTodos] = useState([]);


    // 호출/출력 코드는 동일하기에 재사용할 수 있음
    const fetchTodos = async () => { 
       /*  let result = await fetch("http://localhost:4000/todos")
        let json = await result.json();
        setTodos(json); */

        // axios를 사용하면 이렇게도 가능
        const {data} = await axios.get("http://localhost:4000/todos")
        setTodos(data);
        //console.log(result)

    }

    useEffect (() => { 
    /*     fetch("http://localhost:4000/todos")
        .then((res) => res.json())  // api에서 받은 값을 json으로 변환하고
        .then((json) => {
            //console.log(json)
            setTodos(json);  // json을 todos에 저장
            });
 */
        fetchTodos();
    }, []);


    const [input, setInput] = useState("");

    const handleInput = (e) => { 
        setInput(e.target.value);
    }

    //const nextId = useRef(3);
    
    const handleSumit = async () => {
        /* 
        try {
            let result = await fetch("http://localhost:4000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    //id : nextId,  // 라이브러리가 id값을 알아서 올려줌
                    text : input,
                    done : false,
                })
            })  // 여기까지만 작성하면 데이터만 들어가고 갱신이 안됨
    
            //.then((res) => res.json())
            //.then((json) => {
                //setTodos([...todos, json]);
                //nextId.current.value += 1;
            //});
    
            // 이렇게 할 수 있음
            // let json = await result.json();
            //console.log(json) 
            
            //fetchTodos();


            //setInput("");
        }
        catch(e){
            console.log(e);
        }        */


        // axios를 사용하면 코드가 줄어든다
        axios
            .post("http://localhost:4000/todos", 
                {
                    text : input,
                    done : false,
                })
            .then(() => {
                fetchTodos();
                setInput("");
            }).catch((e) => { 
                console.log(e); 
            });

    }

    const handleToggle = async (id, done) => {

        // url에 id값을 넣어서 해당 id값을 찾아서 done값을 바꿔줌
        /* 
        await fetch(`http://localhost:4000/todos/${id}`, { 
            method: "PATCH",  // PUT 이면 전체를 바꾸므로 text값도 필요함
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                done : !done
            }),
        });
        
        fetchTodos();

        */


        axios
            .patch(`http://localhost:4000/todos/${id}`, 
                { 
                    done : !done 
                })
            .then(() => {
                fetchTodos();
            }).catch((e) => { 
                console.log(e); 
            });




    }



    
    const handleRemove = (id) => {

        // url에 id값을 넣어서 해당 id값을 찾아서 done값을 바꿔줌
        /* fetch(`http://localhost:4000/todos/${id}`, { 
            method: "DELETE"
        }).then(() => {
            fetchTodos();  // then을 사용했으므로 async/await를 사용하지 않아도 됨
        }).catch((e) => {  // 실패했을때. try/catch와 별개로 사용
            console.log(e);
        });  */

        axios.delete(`http://localhost:4000/todos/${id}`)
            .then(() => {
                fetchTodos();
            }).catch((e) => { 
                console.log(e); 
            });
    }




    return (
        <div>
            <input type="text" value={input} onChange={handleInput}/>
            <button type="button" onClick={handleSumit}>등록</button>

            <ul>
                {todos.map(todo => 
                    <li  
                        key={todo.id}                                        
                        style={{textDecoration : todo.done ? "line-through" : "none"}}> 

                        <span 
                            onClick={() => handleToggle(todo.id, todo.done)}>
                            {todo.text}
                        </span>
                        
                        {/* 토글에 대한 이벤트 전파를 막거나 별도로 분리 */}
                        <button type="button" onClick={() => handleRemove(todo.id)}>
                            삭제
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );

}

export default Todos;