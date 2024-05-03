// import { useState } from "react";
// import {useNavigate} from "react-router-dom"

// const Login = (props) => {
//     const [status,setStatus]=useState('');
//     const navigate = useNavigate();

//     const [loginData, setLoginData] = useState({ username: '', password: '' });

//     const handleLoginInput = (evt) => {
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     // sonu sonu 

//     const handleLoginSubmit = (evt) => {
//         // evt.preventDefault();

//         if(loginData.username=='admin' && loginData.password =='password'){
//             alert("Login successfull")
//             setStatus("Login successfull");
            
//         console.log(props.isLoggedIn);
            
//             props.setIsLoggedIn(true);
//             navigate('/employee')

            
//         }
//         else{
//             alert("Invalid credentials")
//             setStatus("Invalid Credentials")
//         }

//     };

//     return (
//         <>
//             <h1>Login Component</h1>
//             <p>Login here</p>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="text" name="username" value={loginData.firstName} onChange={handleLoginInput} />
//                 <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
//                 <input type="submit" value="Login" />
//             </form>
//             <>
//                 <p>username that you are entering: {loginData.username} </p>
//                 <p>password that you are entering: {loginData.password}</p>
//             </>
//             <p>Status: {status}</p>
//         </>
//     );
// };
// export default Login;


// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  console.log(props.isLoggedIn);

  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLoginInput = (evt) => {
    setLoginData({
      ...loginData,
      [evt.target.name]: evt.target.value
    });
  };

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

    if (loginData.username === 'admin' && loginData.password === 'password') {
      alert('Login successful');
      setStatus('Login successful');
      props.setIsLoggedIn(true);
      navigate('/');


      
    } else {
      alert('Invalid credentials');
      setStatus('Invalid Credentials');
    }
  };

  return (
    <>
      <h1>Login Component</h1>
      <p>Login here</p>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" value={loginData.username} onChange={handleLoginInput} />
        <input type="password" name="password" value={loginData.password} onChange={handleLoginInput} />
        <input type="submit" value="Login" />
      </form>
      <>
        <p>username that you are entering: {loginData.username} </p>
        <p>password that you are entering: {loginData.password}</p>
      </>
      <p>Status: {status}</p>
    </>
  );
};

export default Login;
