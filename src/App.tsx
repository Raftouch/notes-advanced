import { Navigate, Route, Routes } from "react-router-dom";
import NewNotePage from "./pages/NewNotePage";
import EditNotePage from "./pages/EditNotePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
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
