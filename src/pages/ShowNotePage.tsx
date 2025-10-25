import { Link } from "react-router-dom";
import { useNote } from "../layouts/NoteLayout";

export default function ShowNotePage() {
  const note = useNote();

  return (
    <div className="p-5 flex items-center justify-between">
      <div>
        <h1 className="mb-4">{note.title}</h1>
        <ul className="flex flex-wrap gap-2">
          {note.tags.length > 0 &&
            note.tags.map((tag) => (
              <li
                className="px-2 bg-blue-500 rounded-md w-fit text-sm font-semibold text-white"
                id={tag.id}
              >
                {tag.label}
              </li>
            ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Link to={`/${note.id}/edit`}>
          <button className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md cursor-pointer">
            Edit
          </button>
        </Link>
        <button className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer">
          Delete
        </button>
        <Link to="/">
          <button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md cursor-pointer">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
