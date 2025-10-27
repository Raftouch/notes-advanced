import NoteForm from "../elements/NoteForm";
import { useNote } from "../layouts/NoteLayout";
import type { NoteData, Tag } from "../types/note";

interface EditNoteProps {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export default function EditNotePage({
  onSubmit,
  onAddTag,
  availableTags,
}: EditNoteProps) {
  const note = useNote();

  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
}
