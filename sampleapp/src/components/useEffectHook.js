import { useState,useEffect } from 'react'

function UseEffectHook(props) {
    const [count, setCount] = useState(0); //undefined to 0 
    //const count = 0;
    // useEffect(() =>{
    //     console.log("Mounting using useEffect()..")
    // })

    useEffect(()=>{
           console.log("dependency array is empty");
           fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then(response => console.log(response.json()))
             .then(json => console.log(json))
    },[]) //empty array ,dependency array

    // useEffect(() =>{
    //   //  WebSocket.OPEN()

    //      console.log("state variable has been modified");

    // //    return()=> WebSocket.disconnect();
    // },[count,props.name])

    const btnClicked = () => {
      
        setCount(count + 1);

    }
    return (
        <>
            <p>You clicked {count}</p>
            <button onClick={(btnClicked)}>Add Counter</button>
            {/* <button onClick={()=>setCount(count+1)}>Add Counter</button> */}

        </>
    )
}
export default UseEffectHook