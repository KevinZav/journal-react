import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          August 28, 2020
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined>
          <Typography>Save</Typography>
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Write some title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What is happend today?"
          label="Action"
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
        ></TextField>
        {/* Images */}
        <ImageGallery></ImageGallery>
      </Grid>
    </Grid>
  );
};
