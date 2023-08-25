import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { deleteNote, startUpdateNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';

export const NoteView = () => {

  const { activeNote, messageSaved, isSaving } = useSelector((state: any) => state.journal);
  const inputFileRef = useRef(null);
  const dispatch = useDispatch();
  const { title, body, onInputChange, updateFormValue } = useForm({
    title: activeNote.title || '',
    body: activeNote.body || ''
  }, {});

  useEffect(() => {
    if (messageSaved !== '') {
      Swal.fire('Note updated!', messageSaved, 'success');
    }
  }, [messageSaved]);

  useEffect(() => {
    updateFormValue(activeNote);
  }, [activeNote])

  const dateString = useMemo(() => new Date(activeNote.date).toUTCString() , [activeNote]);

  const saveNote = () => {
    dispatch(startUpdateNote({...activeNote, body, title}));
  }

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    dispatch(startUploadingFiles(files))
  }

  const onDelete = () => {
    dispatch(deleteNote());
  }

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
        {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input type="file" multiple onChange={(e) => onFileInputChange(e)} style={{display: "none"}} ref={inputFileRef}></input>
        <IconButton disabled={isSaving} onClick={() => (inputFileRef.current as any)?.click()}><UploadOutlined color='primary'/></IconButton>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ p: 2 }} onClick={saveNote}>
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
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What is happend today?"
          label="Action"
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
        ></TextField>
        <Grid container justifyContent="end">
          <Button onClick={onDelete} sx={{mt: 2}}>
            <DeleteOutline></DeleteOutline>
          </Button>
        </Grid>
        {/* Images */}
        <ImageGallery images={activeNote.imageUrls || []}></ImageGallery>
      </Grid>
    </Grid>
  );
};
