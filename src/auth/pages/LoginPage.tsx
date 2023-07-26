import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startSignWithEmailPassword } from '../../store/auth/thunks';
import { AuthStateEnum } from '../../shared/enums';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state: any) => state.auth)
  const { email, password, onInputChange, valid} = useForm({
    email: 'kvin@gmail.com',
    password: '123456'
  }, {});

  const isAuthenticating = useMemo(() => state === AuthStateEnum.CHECKING, [state]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!valid) return;
    dispatch(startSignWithEmailPassword(email, password));
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSignIn());
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
                <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>Login</Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth onClick={onGoogleSingIn} disabled={isAuthenticating}>
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
