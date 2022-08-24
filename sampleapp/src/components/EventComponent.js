function Button(){
    const onButtonClicked = (e) => {
        console.log("Button is Clicked!!!",e);
    }

    return(
        <button onClick={() => onButtonClicked(this)}>Click Me !!</button>
    )
}
export default Button