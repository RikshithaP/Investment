import React, { useState } from "react";
import "./Home.css";
import illustration from "../assets/bg.png";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  return (
    <main>
      <Navbar />
      <div className="hero">
        <div className="main-text">
          <h1>All things finance, right here.</h1>
          <p>Built for a growing India.</p>
          <button onClick={openLogin} className="get-started-btn">
            Get Started
          </button>
          {isLoginOpen && <Login onClose={closeLogin} />}
        </div>
        <div className="illustration">
          <img
            src={illustration}
            alt="Illustration"
            className="illustration-img"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
