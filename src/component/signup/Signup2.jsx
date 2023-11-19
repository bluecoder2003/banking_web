import React, { useState } from 'react';
import './signup2.css';

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
    <div className="signup2box">
    <div className="signup2_container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="ENTER PAN NUMBER"
            required
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="ENTER AADHAAR NUMBER"
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
