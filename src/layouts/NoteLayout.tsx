import { Navigate, Outlet, useParams } from "react-router-dom";
import type { Note } from "../types/note";

interface NoteLayoutProps {
  notes: Note[];
}

export default function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}
