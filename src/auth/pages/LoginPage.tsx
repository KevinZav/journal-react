import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import React from 'react';

export const LoginPage = () => {

  const { email, password, onInputChange} = useForm({
    email: 'kvin@gmail.com',
    password: '123456'
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log({email, password})
  }

  const onGoogleSingIn = () => {
    console.log({email, password})
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                name="email"
                onChange={onInputChange}
                value={email}
                placeholder="your_email@email.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={onInputChange}
                value={password}
                placeholder="Your password here"
                fullWidth
              ></TextField>
            </Grid>
            <Grid container spacing={ 2 } sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth type="submit">Login</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth onClick={onGoogleSingIn}>
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  );
};
