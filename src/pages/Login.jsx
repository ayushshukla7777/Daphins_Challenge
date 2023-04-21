import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AuthStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // form function
  function handleSubmit() {
    navigate("/home", { state: { email: { email }, name: { name } } });
  }

  return (
    <div className="form-container " style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
