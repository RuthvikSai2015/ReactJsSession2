import {useState,useEffect} from 'react'

function useFetchCustomHook(url){
    const [data,setData] = useState([]);
    useEffect(() => {

        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))

    },[])
    return data;
}
export default useFetchCustomHook;