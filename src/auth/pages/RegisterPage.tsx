import { Button, Grid, TextField, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <form>
          <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Name"
                type="text"
                placeholder="Your name"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="your_email@email.com"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="your password here"
                fullWidth
              ></TextField>
            </Grid>
            <Grid container spacing={ 2 } sx={{mb: 2, mt: 1}}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" fullWidth>Sign Up</Button>
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
  )
}
