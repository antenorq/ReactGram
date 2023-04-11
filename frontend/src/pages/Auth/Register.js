import "./Auth.css";

//components
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Register to see pictures of your friends</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="submit" value="Register" />
        <p>
          Already have account? <Link to="/login">Click Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
