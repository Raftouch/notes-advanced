import { Navigate, Route, Routes } from "react-router-dom";
import NewNotePage from "./pages/NewNotePage";
import EditNotePage from "./pages/EditNotePage";
import NoteList from "./pages/NoteListPage";
import useLocalStorage from "./hooks/useLocalStorage";
import type { NoteData, RawNote, Tag } from "./types/note";
import { useMemo } from "react";
import NoteLayout from "./layouts/NoteLayout";
import ShowNotePage from "./pages/ShowNotePage";
import { v4 as uuidV4 } from "uuid";

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

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function updateTag(id: string, label: string) {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.id === id ? { ...tag, label } : tag))
    );
  }

  function removeTag(id: string) {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  function onRemoveNote(id: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <NoteList
            availableTags={tags}
            notes={notesWithTags}
            onUpdateTag={updateTag}
            onRemoveTag={removeTag}
          />
        }
      />
      <Route
        path="/new"
        element={
          <NewNotePage
            onSubmit={onCreateNote}
            onAddTag={addTag}
            availableTags={tags}
          />
        }
      />
      <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
        <Route index element={<ShowNotePage onRemove={onRemoveNote} />} />
        <Route
          path="edit"
          element={
            <EditNotePage
              onSubmit={onUpdateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
