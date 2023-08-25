import { createSlice } from '@reduxjs/toolkit';
import { Journal } from '../../shared';

const initialState: Journal = {
  isSaving: false,
  messageSaved: '',
  activeNote: null,
  notes: [],
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.messageSaved = '';
    },
    switchIsSaving: (state, action) => {
      state.isSaving = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    updateNote: (state, action) => {
      state.notes.forEach(((note, idx) => {
        if (note.id === action.payload.id) {
          state.notes[idx] = {...action.payload};
        }
      }));
      state.messageSaved = 'Note updated, successfully!';
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote!.imageUrls = [...state.activeNote?.imageUrls || [], action.payload];
    },
    setInitialValueJournal: (state) => {
      state.activeNote = null;
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
    },
    deleteNoteById: (state, action) => {
      state.activeNote = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, updateNote, deleteNoteById, switchIsSaving, setPhotosToActiveNote, setInitialValueJournal } =
  journalSlice.actions;
