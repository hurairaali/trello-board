// components/Column.tsx
import { FC, memo, useState, useRef } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { useListStore } from "@/store/store-list";
import { List } from "@/types/types";
import ListActionsMenu from "@/components/ListActionsMenu";
import { useClickAway } from "react-use";

const Column: FC<List> = ({ listName, id }) => {
  const menuRef = useRef(null);
  const renameList = useListStore((state) => state.renameList);
  const removeList = useListStore((state) => state.removeList);

  const [isEditing, setIsEditing] = useState(false);
  const [editListName, setListName] = useState(listName);
  const [showMenu, setShowMenu] = useState(false);

  const handleBlurOrEnter = () => {
    if (editListName.trim() && editListName !== listName) {
      renameList(id, editListName.trim());
    }
    setIsEditing(false);
  };

  const handleArchive = () => {
    removeList(id);
    setShowMenu(false); // close menu after action
  };

  useClickAway(menuRef, () => setShowMenu(false));

  return (
    <div className="bg-[#181818] rounded-lg shadow-md p-1 flex flex-col justify-between h-fit w-72 relative">
      <div className="flex justify-between items-center p-2">
        {isEditing ? (
          <input
            type="text"
            value={editListName}
            onChange={(e) => setListName(e.target.value)}
            onBlur={handleBlurOrEnter}
            autoFocus
            className=" h-8 p-2 rounded-md bg-[#222218] border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          />
        ) : (
          <button
            className="w-full text-left cursor-pointer h-8"
            onClick={() => setIsEditing(true)}
          >
            <span className="ds-text text-md">{listName}</span>
          </button>
        )}

        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`p-1 rounded ${
            showMenu ? "bg-[#b6c2cf]" : "hover:bg-[#2a2a2a]"
          } transition cursor-pointer`}
        >
          <MoreHorizontal
            size={16}
            className={`${showMenu ? "text-[#1d2125]" : "text-white"}`}
          />
        </button>
      </div>

      <div className="mt-auto p-2">
        <button className="flex items-center text-gray-400 text-sm hover:underline">
          <Plus size={14} className="mr-1" />
          Add a card
        </button>
      </div>
      {showMenu && (
        <div ref={menuRef}>
          <ListActionsMenu onArchive={handleArchive} />
        </div>
      )}
    </div>
  );
};

export default memo(Column);
