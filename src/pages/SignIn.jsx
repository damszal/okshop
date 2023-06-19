import * as React from 'react';

import {Grid,Typography,TextField, Button,
} from '@mui/material'



function SignIn() {
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
        />
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          style={{ marginBottom: "2em" }}
        />
        <TextField
          variant="outlined"
          label="Repeat Password"
          fullWidth
          style={{ marginBottom: "2em" }}
        />
        <Button size="large" variant="contained" color="primary">
          sign in
        </Button>
      </Grid>
    </Grid>
  </Grid>
  )
}


export default SignIn