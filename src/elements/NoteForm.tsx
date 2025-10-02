import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

export default function NoteForm() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value="Add title here"
          required
        />
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <CreatableSelect id="tags" name="tags" isMulti required />
      </div>
      <div>
        <label htmlFor="markdown">Body</label>
        <textarea
          id="markdown"
          name="markdown"
          value="Add some text"
          required
        />
      </div>
      <input type="submit" value="Submit" />
      <Link to="..">
        <input type="button" value="Cancel" />
      </Link>
    </form>
  );
}
