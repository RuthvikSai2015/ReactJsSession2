import {createSlice} from '@reduxjs/toolkit'
export const CounterSlice = createSlice({
    name:'counter',
    initialState:{
      value:0
    },
    reducers :{
          increment:(state) =>{
             state.value+=1; //{value:0} state.value = state.value+1
          },
          decrement:(state)=>{
            state.value-=1;
          }
    }
})
export const {increment,decrement} = CounterSlice.actions; //consumer
export const selectCount = (state) => state.counter.value; //consumer
export default CounterSlice.reducer; //store