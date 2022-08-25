import { useState } from 'react'

function UseStateHook() {
    const [count, setCount] = useState(0);
    //    const [email,setEmail] = useState("");
    //    const [password,setPassword] = useState("");
    //    const handleEmailChange = (event)  => {
    //     console.log(event);
    //     console.log("Email has been changed name",event.target.name)
    //     console.log("Email has been changed value",event.target.value)
    //     setEmail(event.target.value);
    //    }
    const [forminputs, setFormInputs] = useState({
        email: "",
        password: "",
    })
    const handleInputChange = (event) => {
        console.log("changed name", event.target.name)
        // let emailValue='';
        // let pwdValue='';
        // if (event.target.name == "email"){
        //     emailValue = event.target.value;
        // }
        // if (event.target.name == "password"){
        //     pwdValue = event.target.value;
        // }
      //  console.log(" changed value", event.target.value)
        setFormInputs({
            // email : emailValue,
            // password  : pwdValue
            [event.target.name]: event.target.value
        })
        console.log("form inputs---", forminputs)
    }
    const btnClicked = () => {
        console.log("Button Clicked");
        //count=count+1;
        setCount(count + 1);
    }
    return (
        <>
            <p>You clicked {count}</p>
            {/* <button onClick={(btnClicked)}>Add Counter</button> */}
            {/* <button onClick={()=>setCount(count+1)}>Add Counter</button> */}
            <form>
                <label>Email:</label><input name="email" type="email" onChange={handleInputChange} /><br />
                <label>Password:</label><input name="password" type="password" onChange={handleInputChange} /><br />
                <button>Submit</button>
            </form>
        </>
    )
}
export default UseStateHook