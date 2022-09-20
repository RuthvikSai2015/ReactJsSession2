import './Header.css';
import { Link } from 'react-router-dom'
import React from 'react';
function HeaderLeft() {
    return (
        <div className="nav-left text-color">Left Div</div>
    )
}
function HeaderCenter() {
    return (
        <div className="nav-center text-color">Center Div</div>
    )
}
function HeaderRight() {
    return (
        <div className="nav-right text-color">Right Div</div>
    )
}
function Header() {
    return (
        <div className='header'>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
            <button><Link to="/login">Sign In</Link></button>
        </div>
    )
}
export default Header;
