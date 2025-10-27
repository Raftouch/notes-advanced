import NoteForm from "../elements/NoteForm";
import type { NoteData, Tag } from "../types/note";

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export default function NewNotePage({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
}
