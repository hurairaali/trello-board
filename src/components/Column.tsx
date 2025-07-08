// components/Column.tsx
import { FC, memo, useState } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { useListStore } from "@/store/store-list";
import { List } from "@/types/types";

const Column: FC<List> = ({ listName, id }) => {
  const renameList = useListStore((state) => state.renameList);
  const [isEditing, setIsEditing] = useState(false);
  const [editListName, setListName] = useState(listName);

  const handleBlurOrEnter = () => {
    if (editListName.trim() && editListName !== listName) {
      renameList(id, editListName.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-[#181818] rounded-lg shadow-md p-4 flex flex-col justify-between h-fit w-72">
      <div className="flex justify-between items-start mb-4">
        {isEditing ? (
          <input
            type="text"
            value={editListName}
            onChange={(e) => setListName(e.target.value)}
            onBlur={handleBlurOrEnter}
            autoFocus
            className="w-full h-8 p-2 rounded-md bg-[#222218] border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          />
        ) : (
          <span className="ds-text text-md" onClick={() => setIsEditing(true)}>
            {listName}
          </span>
        )}
        <MoreHorizontal size={20} className="text-white" />
      </div>

      <div className="mt-auto">
        <button className="flex items-center text-gray-400 text-sm hover:underline">
          <Plus size={14} className="mr-1" />
          Add a card
        </button>
      </div>
    </div>
  );
};

export default memo(Column);
