import React,{useState} from 'react'
import axios from 'axios'

function About() {

    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
      axios.post('http://127.0.0.1:5173/reg/user', {
        username : emailReg,
        password : passwordReg,
      }).then((response) => {
        console.log(response)
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
        </div>
        <div className='login'>
          <h1>Login</h1>
          <input type="text" placeholder='Email...'/>
          <input type="password" placeholder='Password...'/>
        </div>
    </div>
  )
}

export default About
