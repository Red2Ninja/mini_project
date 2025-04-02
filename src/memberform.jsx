import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMember } from "./memberData"; // Import addMember function
import "./styles.css";

function MemberForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      setError("All fields are required.");
      return;
    }

    var emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    if (!isLogin) {
      // Add new member to the list when signing up
      addMember({ name: name });
      alert("Signup Successful!");
    } else {
      alert("Login Successful!");
    }

    navigate("/MemberDashboard"); // Redirect to member page
  }

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error !== "" && <p className="error-message">{error}</p>}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={toggleForm} className="toggle-text">
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default MemberForm;
