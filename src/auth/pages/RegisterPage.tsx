import { Button, Grid, TextField, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { FormValidations } from '../../shared/models/types/formTypes';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateUserWithEmailPassword } from '../../store/auth/thunks';
import { AuthStateEnum } from '../../shared/enums';

const formValidations: FormValidations = {
  email: [(value: string) => value.includes('@'), 'Email shoul have @'],
  password: [(value: string) => value.length >= 6, 'Password should have more than 6 characters'],
  name: [(value: string) => value.length >= 3, 'Name should have more than 3 characters'],
};

export const RegisterPage = () => {
  const { name, email, password, onInputChange, formValidation, valid, touched, onInputTouch } =
    useForm(
      {
        name: '',
        email: '',
        password: '',
      },
      formValidations
    );
  const dispatch = useDispatch();
  const { errorMessage, state } = useSelector((state: any) => state.auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;
    dispatch(startCreateUserWithEmailPassword(email, password, name));
  };

  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              name="name"
              onChange={onInputChange}
              value={name}
              placeholder="Your name"
              fullWidth
              error={!!formValidation.name && !!touched.name}
              helperText={!!touched.name && formValidation.name}
              onBlur={(_) => onInputTouch('name')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={onInputChange}
              value={email}
              placeholder="your_email@email.com"
              fullWidth
              error={!!formValidation.email && !!touched.email}
              helperText={!!touched.name && formValidation.email}
              onBlur={(_) => onInputTouch('email')}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={onInputChange}
              value={password}
              placeholder="your password here"
              fullWidth
              error={!!formValidation.password && !!touched.password}
              helperText={!!touched.password && formValidation.password}
              onBlur={(_) => onInputTouch('password')}
            ></TextField>
          </Grid>
          <Grid container>
            {!!errorMessage && (
              <Alert severity="error" color="error" sx={{ width: '100%', mt: 2 }}>
                {errorMessage}
              </Alert>
            )}
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth type="submit" disabled={!valid || state === AuthStateEnum.CHECKING}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Do you have any account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
