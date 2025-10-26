import NoteForm from "../elements/NoteForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNote } from "../layouts/NoteLayout";
import type { NoteData, RawNote, Tag } from "../types/note";

export default function EditNotePage() {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);

  const note = useNote();

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

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onUpdateNote(note.id, data)}
        onAddTag={addTag}
        availableTags={tags}
      />
    </div>
  );
}
