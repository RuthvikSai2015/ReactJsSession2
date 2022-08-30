import useFetchCustomHook from "./useFetchCustomHook";

function CustomHookData() {


    const response = useFetchCustomHook('https://jsonplaceholder.typicode.com/posts')
    return (
        <>
             <ul>
                { 
                     response.map((item) => {
                        return (
                            <li key={item.id}>
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
export default CustomHookData;