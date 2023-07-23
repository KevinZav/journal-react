import { Box, Toolbar } from '@mui/material';
import { JournalType } from '../../shared/models/components';
import { FC } from 'react';
import { Navbar, SideBar } from '../components';

const drawerWith = 280;

export const JournalLayout: FC<JournalType> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWith={drawerWith}></Navbar>

      <SideBar drawerWith={drawerWith}></SideBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
