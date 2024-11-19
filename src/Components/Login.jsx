import React, { useState } from "react";
import "./UniqueLogin.css";

function Login({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleSendOtp = () => {
    if (email) {
      setOtp("123456"); // Mock OTP
      setOtpSent(true);
      alert(`OTP sent to ${email}`);
    } else {
      alert("Please enter your email.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === enteredOtp) {
      alert("OTP Verified. Redirecting to dashboard...");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="unique-login-overlay">
      <div className="unique-login-container">
        <div className="unique-login-header">
          <h2>
            {isForgotPassword
              ? "Forgot Password"
              : isSignup
              ? "Sign Up"
              : "Login"}
          </h2>
          <button className="unique-login-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="unique-login-content">
          {isForgotPassword ? (
            otpSent ? (
              <>
                <label>Enter OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                />
                <button
                  onClick={handleVerifyOtp}
                  className="unique-primary-btn"
                >
                  Verify OTP
                </button>
              </>
            ) : (
              <>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSendOtp} className="unique-primary-btn">
                  Send OTP
                </button>
              </>
            )
          ) : (
            <>
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" />
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
              <button className="unique-primary-btn">
                {isSignup ? "Sign Up" : "Login"}
              </button>
              <button className="unique-google-btn">Login with Google</button>
              <p>
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <span
                  className="unique-toggle-link"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Login" : "Sign Up"}
                </span>
              </p>
              <p
                className="unique-forgot-password"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot Password?
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
