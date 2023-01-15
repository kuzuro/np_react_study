import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const INCREASE = "counter/increase";
export const DECREASE = "counter/decrease";



  

export const increasement = createAction("counter/increase");
export const decreasement = createAction("counter/decrease")


export const counterReducer02 = createReducer({value : 0 }, (builder) => { 
    
    builder
        .addCase(increasement, (state, action) => {
            state.value += action.payload;
        })
        .addCase(decreasement, (state, action) => {
            
            state.value -= action.payload;
        });
}); 







export function counterReducer (state = 0, action) {

    switch(action.type) { 
  
      case INCREASE : 
        return state + 1;
      
      case DECREASE :
        return state - 1;
  
      default :
        return state;
  
  
    }
  
}





const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : { 
        incre(state, action) {
            console.log(state)
            return state += action.payload.amount;
        },
        decre(state, action) {
            return state -= action.payload.amount;
        }

    }  

});

export const { incre, decre } = counterSlice.actions;
//export const counterReducer03 = counterSlice.reducer;
export default counterSlice.reducer;