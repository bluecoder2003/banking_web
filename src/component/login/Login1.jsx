import React, { useState } from 'react';
import './login1.css';

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
    <div className="login1box">
    <div className="login1_container">
      <h2>WELCOME CUST_NAME</h2>
      <form onSubmit={handleSubmit}>
      <p>ENTER OTP SENT ON YOUR REGISTERED
 MOBILE NUMBER</p>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="ENTER OTP"
            required
          />
        </label>
        <br />
        <button type="submit">PROCEED</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
