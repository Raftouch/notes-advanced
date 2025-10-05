import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import type { NoteData, RawNote, Tag } from "../types/note";
import useLocalStorage from "../hooks/useLocalStorage";

interface NoteFormProps {
  onSubmit: (data: NoteData) => void;
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-8">
        <div className="w-1/2 flex flex-col space-y-2 pb-8">
          <label htmlFor="title">Title</label>
          <input
            ref={titleRef}
            className="border border-gray-300 rounded min-w-[2px] py-[6px] px-3 text-gray-500"
            type="text"
            id="title"
            name="title"
            value="Add title here..."
            required
          />
        </div>
        <div className="w-1/2 space-y-2">
          <label htmlFor="tags">Tags</label>
          <CreatableSelect
            id="tags"
            name="tags"
            value={selectedTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            onChange={(tags) => {
              setSelectedTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value };
                })
              );
            }}
            isMulti
            required
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="markdown">Body</label>
        <textarea
          ref={markdownRef}
          className="border rounded text-gray-500 py-[6px] px-3"
          id="markdown"
          name="markdown"
          value="Add some text..."
          required
          rows={15}
        />
      </div>
      <div className="flex gap-5 mt-8">
        <input
          className="w-1/2 bg-blue-500 h-12 text-white rounded-md cursor-pointer"
          type="submit"
          value="Submit"
        />
        <div className="w-1/2 bg-red-500 h-12 flex justify-center items-center text-white rounded-md cursor-pointer">
          <Link to="..">
            <input type="button" value="Cancel" />
          </Link>
        </div>
      </div>
    </form>
  );
}
