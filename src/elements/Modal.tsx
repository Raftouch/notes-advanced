import type { Tag } from "../types/note";

interface ModalProps {
  availableTags: Tag[];
  handleClose: () => void;
}

export default function Modal({ availableTags, handleClose }: ModalProps) {
  return (
    <div className="flex flex-col space-y-5 items-center border p-12">
      <h1>Edit tags</h1>
      <form className="w-full">
        <ul className="flex flex-col items-center justify-center">
          {availableTags.map((tag) => (
            <li key={tag.id} className="flex gap-5 space-y-2 items-center">
              <input className="w-full h-8" type="text" value={tag.label} />
              <button className="w-8 h-8 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md flex justify-center items-center">
                &times;
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleClose}>Cancel</button>
      </form>
    </div>
  );
}
