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
import { Note, SideBarType } from '../../shared';
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBar: FC<SideBarType> = ({ drawerWith }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth)
  const { notes } = useSelector((state: any) => state.journal);

  const onSelectNote = (note: Note) => {
    dispatch(setActiveNote(note));
  }

  const displayText = (text: string): string => {
    return text.length < 24
      ? text
      : text.slice(0,20) + '...';
  }

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
            {user.displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note: Note) => (
            <ListItem key={note.id} disablePadding>
              <ListItemButton onClick={() => onSelectNote(note)}>
                <ListItemIcon>
                  <TurnedInNot></TurnedInNot>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={displayText(note.title)}></ListItemText>
                  <ListItemText
                    secondary={displayText(note.body)}
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
