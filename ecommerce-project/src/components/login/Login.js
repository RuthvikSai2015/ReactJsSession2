import { useState } from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase';
import { useNavigate } from "react-router-dom";
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const signIn = (e) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>navigate('/'))
        .catch(error => console.error(error));
    }
    const register = (e) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>navigate('/'))
        .catch(error => console.error(error));
    }
    
    return (
        <>
            <h1>Sign In Form</h1>
            Email : <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            Password: <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            <button onClick={signIn}>Sign In</button>
            <p>If you dont have account please register below</p>
            <button onClick={register}>Create a new Account</button>
        </>
    )
}
export default Login;