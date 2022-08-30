import { useState, useEffect } from 'react'
import axios from "axios";

function UseEffectHook(props) {
    const [count, setCount] = useState(0); //undefined to 0 
    //const [content, setContent] = useState({});
    const [content, setContent] = useState([]);
    const [contentType, setContentType] = useState("posts");
    //const count = 0;
    // useEffect(() =>{
    //     console.log("Mounting using useEffect()..")
    // })

    useEffect(() => {
        console.log("dependency array is empty");
        // fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        //     .then(response => response.json())
        //     .then(json => setContent(json))

            fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
            .then(response => response.json())
            .then(json => setContent(json))

            // axios
            // .get(`https://jsonplaceholder.typicode.com/${contentType}`)
            // .then(data => setContent(data.data))
            // .catch(error => console.log(error));

    },[contentType]);
    // useEffect(() =>{
    //   //  WebSocket.OPEN()

    //      console.log("state variable has been modified");

    // //    return()=> WebSocket.disconnect();
    // },[count,props.name])

    // const btnClicked = () => {

    //     setCount(count + 1);

    // }
    return (
        <>
            <button onClick={() => setContentType("posts")}>Posts</button>
            <button onClick={() => setContentType("users")}>Users</button>
            <button onClick={() => setContentType("comments")}>Comments</button>
             <ul>
                { 
                     content.map((item) => {
                        return (
                            <li>
                                <p>{item.userId}</p>
                                <p>{item.title}</p>
                                {/* <li>{item.completed}</li> */}
                            </li>
                    )
                } 
             )}
            </ul>
        </>

    )
}
export default UseEffectHook