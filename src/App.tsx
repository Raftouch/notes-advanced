import { Navigate, Route, Routes } from "react-router-dom";
import NewNotePage from "./pages/NewNotePage";
import EditNotePage from "./pages/EditNotePage";
import NoteList from "./pages/NoteListPage";
import useLocalStorage from "./hooks/useLocalStorage";
import type { RawNote, Tag } from "./types/note";
import { useMemo } from "react";
import NoteLayout from "./layouts/NoteLayout";

function App() {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  return (
    <Routes>
      <Route
        path="/"
        element={<NoteList availableTags={tags} notes={notesWithTags} />}
      />
      <Route path="/new" element={<NewNotePage />} />
      <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<EditNotePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
