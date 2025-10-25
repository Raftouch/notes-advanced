import NoteForm from "../elements/NoteForm";
import { useNote } from "../layouts/NoteLayout";

export default function EditNotePage() {
  const note = useNote();

  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">Edit Note for id {note.id}</h1>
      {/* <NoteForm /> */}
    </div>
  );
}
