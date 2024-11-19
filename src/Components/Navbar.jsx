import React, { useState } from "react";
import "./Navbar.css";
import Login from "./Login";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  return (
    <nav className="navbar">
      <div className="logo">Groww</div>
      <input
        type="text"
        placeholder="What are you looking for today?"
        className="searchbar"
      />
      <button className="login-btn" onClick={openLogin}>
        Login/Register
      </button>
      {isLoginOpen && <Login onClose={closeLogin} />}
    </nav>
  );
};

export default Navbar;
