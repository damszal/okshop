import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

import {Grid,Typography,TextField, Button,
} from '@mui/material'

function Login() {
  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
   }, 
   validationSchema : Yup.object({
     login: Yup.string().max(10,"too much characters!").required("type login"),
     password: Yup.string().max(10,"too much characters!").required("type password")
    }),
    onSubmit : (values) => {
     console.log(values)
    },
  })

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '70vh' }}
    component="form"
    onSubmit={formik.handleSubmit}
  >
    <Grid item style={{ border: "0.2px solid gray" , padding:"2rem"}}>
      <Grid container direction="column" alignItems="center" justify="center">
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          style={{ marginBottom: "2em" }}
          type="text" 
          name="email" 
          id="email" 
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.login && formik.errors.email ? formik.errors.email: formik.values.email}
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          style={{ marginBottom: "2em" }}
          type="text" 
          name="password" 
          id="password" 
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? formik.errors.password: formik.values.password}
        <Button size="large" variant="contained" color="primary" type='submit'>
          sign in
        </Button>
      </Grid>
    </Grid>
  </Grid>






  //  <section className=''>
  //   <form 
  //   className=''
  //   onSubmit={formik.handleSubmit}
  //   >
  //     <div>
  //       <label htmlFor="login">login:</label>
  //       <input 
  //       placeholder='LOGIN' 
  //       type="text" 
  //       name="login" 
  //       id="login" 
  //       value={formik.values.login}
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       />      
  //       {formik.touched.login && formik.errors.login ? formik.errors.login: formik.values.login}
  //     </div>
  //     <div>
  //       <label htmlFor="pass">password:</label>
  //       <input 
  //       placeholder='PASSWORD' 
  //       type="text" 
  //       name="password" 
  //       id="password" 
  //       value={formik.values.password}
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       />      
  //       {formik.touched.password && formik.errors.password ? formik.errors.password: formik.values.password}
  //     </div>
  //     <button 
  //     type='submit'
  //     >
  //       Login</button>
  //   </form>
  //  </section>
  )
}

export default Login