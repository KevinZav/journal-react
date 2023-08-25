import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"
import { Note } from "../shared";

export const loadNotes = async (uid: string): Promise<Note[]> => {
  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);
  const notes: Note[] = [];
  docs.forEach((doc) => notes.push({...(doc.data() as Note), id: doc.id}));
  return notes;
}