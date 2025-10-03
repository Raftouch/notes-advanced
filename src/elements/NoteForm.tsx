import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

export default function NoteForm() {
  return (
    <form>
      <div className="flex gap-8">
        <div className="w-1/2 flex flex-col space-y-2 pb-8">
          <label htmlFor="title">Title</label>
          <input
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
          <CreatableSelect id="tags" name="tags" isMulti required />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="markdown">Body</label>
        <textarea
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
