import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import type { Note, Tag } from "../types/note";
import { useMemo, useState } from "react";
import NoteCard from "../elements/NoteCard";

interface NoteListProps {
  availableTags: Tag[];
  notes: Note[];
}

export default function NoteList({ availableTags, notes }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        title === "" ||
        (note.title.toLowerCase().includes(title.toLowerCase()) &&
          (selectedTags.length === 0 ||
            selectedTags.every((tag) =>
              note.tags.some((noteTag) => noteTag.id === tag.id)
            )))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="pb-5 font-bold text-lg">Notes</h1>

        <div className="flex gap-5 mb-5">
          <Link to="/new">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer">
              Create
            </button>
          </Link>
          {/* <Link to="/new"> */}
          <button className="py-2 px-4 bg-orange-500 text-white rounded-md cursor-pointer">
            Edit
          </button>
          {/* </Link> */}
        </div>
      </div>

      <form>
        <div className="flex gap-5">
          <div className="w-1/2 flex flex-col space-y-2 pb-8">
            <label htmlFor="title">Title</label>
            <input
              className="border border-gray-300 rounded min-w-[2px] py-[6px] px-3 text-gray-500"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-1/2 space-y-2">
            <label htmlFor="tags">Tags</label>
            <ReactSelect
              id="tags"
              name="tags"
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              options={availableTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setSelectedTags(
                  tags
                    ? tags.map((tag) => ({ label: tag.label, id: tag.value }))
                    : []
                );
              }}
              isMulti
              required
            />
          </div>
        </div>
      </form>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNotes.map((note) => (
          <li id={note.id}>
            <NoteCard note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
