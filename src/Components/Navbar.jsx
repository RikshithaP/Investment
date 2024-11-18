import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="logo">Groww</div>
            <input type="text" placeholder="What are you looking for today?" className="search-bar" />
            <button className="login-btn" onClick={() => navigate('/login')}>Login/Register</button>
        </nav>
    );
};

export default Navbar;