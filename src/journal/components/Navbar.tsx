import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { NavbarType } from '../../shared';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Navbar: FC<NavbarType> = ({ drawerWith }) => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWith}px)` },
        ml: { sm: `${drawerWith}px` }
      }}>
      <Toolbar>
        <IconButton color="inherit" sx={{mr: 2, display: { sm: "none" }}}>
          <MenuOutlined></MenuOutlined>
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">Journal App</Typography>
          <IconButton color="error" onClick={logout}>
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
