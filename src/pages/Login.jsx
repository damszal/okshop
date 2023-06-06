import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

function Login() {
  const formik = useFormik({
    initialValues:{
      login: '',
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
   <section className=''>
    <form 
    className=''
    onSubmit={formik.handleSubmit}
    >
      <div>
        <label htmlFor="login">login:</label>
        <input 
        placeholder='LOGIN' 
        type="text" 
        name="login" 
        id="login" 
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />      
        {formik.touched.login && formik.errors.login ? formik.errors.login: formik.values.login}
      </div>
      <div>
        <label htmlFor="pass">password:</label>
        <input 
        placeholder='PASSWORD' 
        type="text" 
        name="password" 
        id="password" 
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />      
        {formik.touched.password && formik.errors.password ? formik.errors.password: formik.values.password}
      </div>
      <button 
      type='submit'
      >
        Login</button>
    </form>
   </section>
  )
}

export default Login