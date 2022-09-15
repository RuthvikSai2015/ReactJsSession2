// import './Button.css'
import styled from 'styled-components'
function Button() {
    // const btnStyle={
    //     backgroundColor:'red',color:'blue'
    // }
    // return (
    //     // <button className="button-color">Button Component</button>
    //     <button style={btnStyle}>Button Component</button>
    //     <button style={{backgroundColor:'red'}}>Button </button>
    // )
    const ToDoComp = styled.div`
        /* This renders the buttons above... Edit me! */
        display: inline - block;
        border - radius: 3px;
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        width: 11rem;
        background: transparent;
        border: 2px solid white;
    `;
    return (
        <ToDoComp>This is a Styled Component</ToDoComp>
    )
}
export default Button