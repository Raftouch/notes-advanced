import { Navigate, Route, Routes } from "react-router-dom";
import NewNotePage from "./pages/NewNotePage";
import EditNotePage from "./pages/EditNotePage";
import NoteList from "./pages/NoteListPage";
import useLocalStorage from "./hooks/useLocalStorage";
import type { Tag } from "./types/note";

function App() {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  return (
    <Routes>
      <Route path="/" element={<NoteList availableTags={tags} />} />
      <Route path="/new" element={<NewNotePage />} />
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<EditNotePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
