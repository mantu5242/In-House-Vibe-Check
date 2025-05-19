import {React , useState}from 'react'
import "./Styles/Signup.css"
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({name:'',email:'',password:''});
  const [confirmPassword,setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [id]: value });
    }
  }

  const handleSubmit = async(e) => {
    console.log(formData)
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try{
    const res = await fetch('http://localhost:8000/api/auth/signup',
    {method:'POST',
    headers:{ 
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data.success);
    if(data.success){
      setMessageType('success');
      setMessage('Login successful!');
      // Optionally redirect after a short delay
      setTimeout(() => navigate('/'), 1000);
      // navigate('/login')
    }
    else {
      setMessageType('error');
      setMessage(data.message || 'Something Went Wrong');
    }
    }
    catch(error){
      setMessageType('error');
      setMessage('Server error. Please try again later.');
    }
  }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="logo">🔥 VibeMatch</h1>
        <p className="tagline">Join and find your perfect vibe match</p>
        {message && (
          <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" id = "name" placeholder="Full Name" className="input-field" onChange = {handleChange} />
          <input type="email" id = "email" placeholder="Email" className="input-field" onChange = {handleChange} />
          <input type="password" id = "password" placeholder="Password" className="input-field" onChange = {handleChange}/>
          <input type="password" id = "confirmPassword" placeholder="Confirm Password" className="input-field" onChange = {handleChange} />

          <button type='submit' className="signup-button" >Sign Up</button>
          <p className="login-text">
            Already have an account? <p className='loginLink' onClick={()=>{navigate('/login')}} >Login</p>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup