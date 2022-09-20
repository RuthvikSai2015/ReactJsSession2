import { useEffect } from "react";

function PostExample() {
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             "userId":200,
    //             "title":"Our title",
    //             "body":"Post Body",
    //             "id":101
    //         }),
    //         headers:{
    //             'content-type':'application/json',
    //             'charset':'utf-8'
    //         }

    //     })
    //         .then(response => response.json())
    //         .then(json => console.log())
    //         .catch(error => console.error(error))
    // }, [])
    useEffect(()=>{
        fetch('http://localhost:8080/messages')
        .then(response => response.json())
        .then(json => console.log())
        .catch(error => console.error(error))
    })
}
export default PostExample;