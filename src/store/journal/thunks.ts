import { Dispatch } from "@reduxjs/toolkit"
import { collection, doc, setDoc, deleteDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { Note } from "../../shared"
import { switchIsSaving, addNewEmptyNote, setActiveNote, setNotes, updateNote, setPhotosToActiveNote, deleteNoteById } from "."
import { loadNotes } from "../../helpers"
import { fileUpload } from "../../helpers/fileUpload"

export const deleteNote = (): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const { activeNote } = getState().journal;
    const { user: {uid} } = getState().auth;

    console.log({uid, activeNote});
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);

    await deleteDoc(docRef);
    dispatch(deleteNoteById(activeNote.id));

  }
}

export const startNewNote = (): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    //uid
    const { user: {uid} } = getState().auth;
    const newNote: Note = {
      title: "New note super amazing",
      body: "This note is amazing and can fly in the sky",
      date: new Date().getTime(),
      imageUrls: []
    };

    dispatch(switchIsSaving(true));

    const newDoc = doc( collection(firebaseDB, `${uid}/journal/notes`) );
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    dispatch(switchIsSaving(false));
    //dispatch
  }
}


export const startLoadingNotes = (): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const { user: {uid} } = getState().auth;

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export const startUpdateNote = (note: Note): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    const { user: {uid} } = getState().auth;

    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    
    dispatch(switchIsSaving(true));
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore);
    dispatch(switchIsSaving(false));

    dispatch(updateNote(note));
  }
}

export const startUploadingFiles = (files: FileList): any => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    dispatch(switchIsSaving(true));

    const fileUploadPromises = [];
    for( const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const resp = await Promise.all(fileUploadPromises);
    const { activeNote: note } = getState().journal;
    const { user: {uid} } = getState().auth; 
    const noteToFirestore: Note = {...note, imageUrls: resp};
    delete noteToFirestore.id;

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore);

    dispatch(switchIsSaving(false));
    dispatch(setPhotosToActiveNote(resp));
    dispatch(updateNote(note))
  }
}