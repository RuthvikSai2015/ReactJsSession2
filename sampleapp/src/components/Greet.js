function UserGreeting(){
    return <h1>User Greet Component</h1>
}
function GuestGreeting(){
    return <h1> Guest Greet Component</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    // if(isLoggedIn){
    //     return <UserGreeting/>
    // }
    // return <GuestGreeting/>  
    return isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
}
export default Greeting;