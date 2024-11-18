import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Hero.css";
import illustration from "../assets/bg.png"; 

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="main-text">
                <h1>All things finance, right here.</h1>
                <p>Built for a growing India.</p>
                <button className="get-started-btn" onClick={() => navigate('/login')}>Get started</button>
            </div>
            <div className="illustration">
                <img src={illustration} alt="Illustration" className="illustration-img" />
            </div>
        </div>
    );
};

export default Hero;