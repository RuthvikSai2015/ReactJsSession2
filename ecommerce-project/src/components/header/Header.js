import './Header.css';
import {Link} from 'react-router-dom'
import { RecaptchaVerifier } from 'firebase/auth';
import React from 'react';
function Header(){
    return (
       <div className='header'>
        <div className="nav-left text-color">Left Div</div>
        <div className="nav-center text-color">Center Div</div>
        <div className="nav-right text-color">Right Div</div>
        <button><Link to="/login">Sign In</Link></button>
       </div>
    )
}
export default Header;
