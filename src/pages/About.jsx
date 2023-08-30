import React,{useState} from 'react'
import axios from 'axios'

function About() {

    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [loginStatus, setLoginStatus] = useState('')

    const register = () => {
      axios.post('http://127.0.0.1:5173/reg/user', {
        username : emailReg,
        password : passwordReg,
      }).then((response) => {
        console.log(response)
      })
    }

    const login = () => {
      axios.post('http://127.0.0.1:5173/log/loged', {
        username : email,
        password : password,
      }).then((response) => {
        console.log(response)
        if(response.data){
          setLoginStatus(response.data)
        } else {
          setLoginStatus(response.data[0].Email)
        }
      })
    }

  return (
      <div className="form-container">
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input 
          type="text" 
          onChange={(e)=>{
            setEmailReg(e.target.value)
          }}
          />
          <label>Password</label>
          <input 
          type="text" 
          onChange={(e)=>{
            setPasswordReg(e.target.value)
          }}          
          />
          <button onClick={register}>Register</button>
          <p>
          {loginStatus}
          </p>
        </div>



        <div className='login'>
          <h1>Login</h1>
          <input 
          type="text" 
          placeholder='Email...'
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
          <input 
          type="password" 
          placeholder='Password...'
          onChange={(e)=>{
            setPassword(e.target.value)
          }}  
          />
          <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default About
