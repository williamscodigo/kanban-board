import { useState, FormEvent, ChangeEvent } from "react";

import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any existing error message

      // Check for empty fields
      if (!loginData.username || !loginData.password) {
        setErrorMessage('Username and password cannot be empty');
        setTimeout(() => setErrorMessage(''), 2000); // Automatically clear the error message
        return;
      }

    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
        setErrorMessage('User not found, try a different username or password');
        console.error('Failed to login', err);
        // Automatically clear the error message after 5 seconds
        setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username || ''}
          onChange={handleChange}
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        <button type='submit'>Submit Form</button>
        <div className="error-message-box">
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
