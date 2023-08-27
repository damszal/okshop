import React,{useState} from 'react'
import axios from 'axios'

import {Grid,Typography,TextField, Button,
} from '@mui/material'



function SignIn() {

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
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '70vh' }}
  >
    <Grid item style={{ border: "0.2px solid gray" , padding:"2rem"}}>
      <Grid container direction="column" alignItems="center" justify="center">
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          style={{ marginBottom: "2em" }}
          onChange={(e)=>{
            setEmailReg(e.target.value)
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          style={{ marginBottom: "2em" }}
          onChange={(e)=>{
            setPasswordReg(e.target.value)
          }}  
        />
        <TextField
          variant="outlined"
          label="Repeat Password"
          fullWidth
          style={{ marginBottom: "2em" }}
        />
        <Button size="large" variant="contained" color="primary" onClick={register}>
          sign in
        </Button>
      </Grid>
    </Grid>
  </Grid>
  )
}


export default SignIn