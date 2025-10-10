import type { Note } from "../types/note";

interface NoteProps {
  note: Note;
}

export default function NoteElement({ note }: NoteProps) {
  return (
    <div className="border">
      <p>Title: {note.title}</p>
      {/* <p>Markdown: {note.markdown}</p> */}
      <ul>
        {note.tags.map((tag) => (
          <li id={tag.id}>{tag.label}</li>
        ))}
      </ul>
    </div>
  );
}
