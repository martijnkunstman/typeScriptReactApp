import { useState } from "react";
import './Login.css'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // You can add your authentication logic here
    // For now, let's just log the entered values
    console.log('Username:', username);
    console.log('Password:', password);

    // You can add further logic, such as API calls for authentication
  };

    return(
      <>
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
          </div> 
      </>
    )    
  }  
  export default Login
  