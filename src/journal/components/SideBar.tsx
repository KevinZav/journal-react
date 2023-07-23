import { Box, Drawer, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { SideBarType } from '../../shared';

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
      </Drawer>
    </Box>
  );
};
