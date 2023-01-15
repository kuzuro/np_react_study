import { useDispatch, useSelector } from "react-redux";
import { decre, decreaments, DECREASE, decreasement, decreasements, incre, increaments, INCREASE, increasement, increasements } from "../state/counter";

function Counter() {

    const counter = useSelector((state) => state.counter);
    //
    const dispatch = useDispatch();

  
    return (
        <>
            <p>{counter}</p>
            {/* <button type="button" onClick={() => dispatch({type : DECREASE}) }>-1</button> */}

            {/* <button type="button" onClick={() => dispatch(decreasement(1)) }>-1</button>            
            <button type="button" onClick={() => dispatch(increasement(1)) }>+1</button> */}

            <button type="button" onClick={() => dispatch(decre({amount : 1})) }>-1</button>            
            <button type="button" onClick={() => dispatch(incre({amount : 1}))}>+1</button>

        </>
    );

}

export default Counter;