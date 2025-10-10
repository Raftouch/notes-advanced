import { useMemo } from "react";
import NoteForm from "../elements/NoteForm";
import useLocalStorage from "../hooks/useLocalStorage";
import type { NoteData, RawNote, Tag } from "../types/note";
import { v4 as uuidV4 } from "uuid";

export default function NewNotePage() {
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);

  // const notesWithTags = useMemo(() => {
  //   return notes.map((note) => {
  //     return {
  //       ...note,
  //       tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
  //     };
  //   });
  // }, [notes, tags]);

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

  return (
    <div className="p-10">
      <h1 className="pb-5 font-bold text-lg">New Note</h1>
      <NoteForm
        onSubmit={onCreateNote}
        onAddTag={addTag}
        availableTags={tags}
      />
    </div>
  );
}
