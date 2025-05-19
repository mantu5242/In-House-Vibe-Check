import {React, useState}from 'react'
import "./Styles/Login.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({name:'',email:''})
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
  const { id, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [id]: value,
  }));
};


  const handleSubmit = async(e) => {
    console.log(formData)
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:8000/api/auth/login',
        {method: 'POST', headers: { 'content-type': 'application/json'}, body: JSON.stringify(formData)}
      )
      console.log(res)
      const data = await res.json()

      if (data.success) {
      setMessageType('success');
      setMessage('Login successful!');
      // Optionally redirect after a short delay
      setTimeout(() => navigate('/home'), 1000);
    } else {
      setMessageType('error');
      setMessage(data.message || 'Login failed');
    }
  } catch (error) {
    setMessageType('error');
    setMessage('Server error. Please try again later.');
  }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo">🔥 VibeMatch</h1>
        <p className="tagline">Find your perfect vibe match</p>
        {message && (
          <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id = 'email'
            placeholder="Email"
            className="input-field"
            onChange={handleChange}
          />
          <input
            type="password"
            id = 'password'
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
          />
          <button className="login-button" type='submit'>Login</button>
          <p className="signup-text">
            Don’t have an account? <p className='signupLink' onClick={()=>{navigate('/signup')}}>Sign up</p>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login