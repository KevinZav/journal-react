export interface Journal {
  isSaving: boolean;
  messageSaved: string;
  notes: Note[];
  activeNote: Note | null;
}

export interface Note {
  id?: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}
