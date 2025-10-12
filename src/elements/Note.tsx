import { Link } from "react-router-dom";
import type { Note } from "../types/note";

interface NoteProps {
  note: Note;
}

export default function NoteElement({ note }: NoteProps) {
  return (
    <Link to={`/${note.id}`}>
      <div className="border rounded-lg h-24 p-5 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 space-y-2">
        <h2 className="text-center">{note.title}</h2>
        {/* <p>Markdown: {note.markdown}</p> */}
        <ul className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <li
              className="px-2 bg-blue-500 rounded-md w-fit text-sm font-semibold text-white"
              id={tag.id}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
