import {useState} from 'react'
import axios from 'axios'
import { useFormik } from 'formik';

import {Grid,TextField, Button,
} from '@mui/material'

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMsg, setLoginMsg] = useState('')
  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
      login(email,password)
    },
  });  
  const login = (email,password) => {
    axios.post('http://127.0.0.1:5173/log/loged', {
      username : email,
      password : password,
    }).then((response) => {
      console.log(response)
      if(response.data.message){
        setLoginMsg(response.data.message)
      }else {
        setLoginMsg(response.data[0].Email)
      }
    })
  }

  return (
    <Grid
    container
    spacing={2}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '70vh' }}
    component="form"
  >
    <Grid item style={{ border: "0.2px solid gray" , padding:"2rem"}}>
      <Grid container direction="column" alignItems="center" justify="center">
        <TextField
          variant="outlined"
          label="email"
          fullWidth
          style={{ marginBottom: "2em" }}
          // type="text" 
          name="email" 
          id="email" 
          type="email"
          value={formik.values.email}
          onChange={
            formik.handleChange
          // }
        }
        />

        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          style={{ marginBottom: "2em" }}
          type="text" 
          name="pass" 
          id="pass" 
          value={formik.values.pass}
          onChange={
            formik.handleChange
          } 
        />
        <Button size="large" variant="contained" color="primary" type='submit' onClick={(e)=>{
              formik.handleSubmit()
              setEmail(()=>{return formik.values.email})
              setPassword(()=>{return formik.values.pass})
        }}>
          sign in
        </Button>
        <p>
          {loginMsg}
        </p>
      </Grid>
    </Grid>
  </Grid>
  )}


// formik and yup module are still instaled 

// function Login() {
//   const formik = useFormik({
//     initialValues:{
//       email: '',
//       password: '',
//    }, 
//    validationSchema : Yup.object({
//      login: Yup.string().max(10,"too much characters!").required("type login"),
//      password: Yup.string().max(10,"too much characters!").required("type password")
//     }),
//     onSubmit : (values) => {
//      console.log(values)
//     },
//   })

//   return (
//     <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justifyContent="center"
//     sx={{ minHeight: '70vh' }}
//     component="form"
//     onSubmit={formik.handleSubmit}
//   >
//     <Grid item style={{ border: "0.2px solid gray" , padding:"2rem"}}>
//       <Grid container direction="column" alignItems="center" justify="center">
//         <TextField
//           variant="outlined"
//           label="Email"
//           fullWidth
//           style={{ marginBottom: "2em" }}
//           type="text" 
//           name="email" 
//           id="email" 
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.login && formik.errors.email ? formik.errors.email: formik.values.email}
//         <TextField
//           variant="outlined"
//           label="Password"
//           fullWidth
//           style={{ marginBottom: "2em" }}
//           type="text" 
//           name="password" 
//           id="password" 
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.password && formik.errors.password ? formik.errors.password: formik.values.password}
//         <Button size="large" variant="contained" color="primary" type='submit'>
//           sign in
//         </Button>
//       </Grid>
//     </Grid>
//   </Grid>



export default Login