import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { SideBarType } from '../../shared';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar: FC<SideBarType> = ({ drawerWith }) => {
  return (
    <Box component="nav" sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Kevin Zavala
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot></TurnedInNot>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={month}></ListItemText>
                  <ListItemText
                    secondary={'Lorem ipsum dolor sit amet'}
                  ></ListItemText>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
