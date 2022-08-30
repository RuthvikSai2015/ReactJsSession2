import Decrement from "./Decrement";
import Display from "./Display";
import Increment from "./Increment";
import {useState} from 'react';


function CounterParent(){
    const [count,setCount] = useState(1);
    const incrementCounter = () => setCount(count+1);
    const decrementCounter = () => setCount(count-1);
    return(
        <>
          <Increment onClickFunc={incrementCounter}/>
          <Display count={count}/>
          <Decrement onClickFunc={decrementCounter}/>
        </>
    )

}
export default CounterParent;