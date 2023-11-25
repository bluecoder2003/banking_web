import React, { useState } from 'react';
import './login.css';
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
    console.log('Logging in with:', { username, password });

    // Reset the form after submission (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="loginbox">
    <div className="login_container">
      <h2>LOG IN</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="ENTER USERNAME"
            required
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="ENTER PASSWORD"
            required
          />
        </label>
        <br />
        <Link style={{ textDecoration: 'none',padding:'0' }} to={`login1`}>
        <button type="submit">PROCEED</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
