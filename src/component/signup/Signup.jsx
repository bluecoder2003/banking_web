import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your authentication logic here
    console.log('signupg in with:', { username, password });

    // Reset the form after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="signupbox">
    <div className="signup_container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="ENTER NAME"
            required
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="ENTER MOBILE NUMBER"
            required
          />
        </label>
        <br />
        <Link style={{ textDecoration: 'none',padding:'0' }} to={`signup1`}>
        <button type="submit">PROCEED</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
