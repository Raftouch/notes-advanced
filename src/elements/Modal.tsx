import type { Tag } from "../types/note";

interface ModalProps {
  availableTags: Tag[];
  handleClose: () => void;
  onUpdateTag: (id: string, label: string) => void;
  onRemoveTag: (id: string) => void;
}

export default function Modal({
  availableTags,
  handleClose,
  onUpdateTag,
  onRemoveTag,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center border-b pb-2">
          Edit Tags
        </h1>

        <form className="space-y-4">
          <ul className="flex flex-col gap-3 max-h-60 overflow-y-auto">
            {availableTags.map((tag) => (
              <li
                key={tag.id}
                className="flex items-center gap-3 border rounded-md px-3 py-2 hover:bg-gray-50 transition"
              >
                <input
                  className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  value={tag.label}
                  onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => onRemoveTag(tag.id)}
                  className="w-8 h-8 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md flex justify-center items-center transition-colors"
                  title="Delete tag"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
