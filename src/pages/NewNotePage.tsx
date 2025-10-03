import NoteForm from "../elements/NoteForm";

export default function NewNotePage() {
  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">New Note</h1>
      <NoteForm />
    </div>
  );
}
