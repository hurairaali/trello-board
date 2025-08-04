// components/Column.tsx
import { FC, memo } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import ListActionsMenu from "@/components/ListActionsMenu";
import AddListForm from "@/components/Modal";
import { useColumnLogic } from "@/hooks/useColumnLogic";

import Card from "./Card";
type ColumnProps = {
  listName: string;
  id: string;
  setIsAdding: (isAdding: boolean) => void;
};
const Column: FC<ColumnProps> = ({ listName, id, setIsAdding }) => {
  const {
    menuRef,
    activeMode,
    setActiveMode,
    editListName,
    handleEditInputChange,
    listRename,
    handleArchive,
    toggleMenu,
    handleAddCard,
    startEditing,
  } = useColumnLogic(id, listName, setIsAdding);

  return (
    <div className="bg-[#181818] rounded-lg shadow-md p-3 flex flex-col justify-between h-fit w-72 relative">
      <div ref={menuRef}>
        <div className="flex justify-between items-center p-2">
          {activeMode === "editing" ? (
            <input
              type="text"
              value={editListName}
              onChange={handleEditInputChange}
              onBlur={listRename}
              autoFocus
              className=" h-8 p-2 rounded-md bg-[#222218] border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
            />
          ) : (
            <button
              className="w-full text-left cursor-pointer h-8"
              onClick={startEditing}
            >
              <span className="ds-text text-md font-semibold">{listName}</span>
            </button>
          )}

          <button
            onClick={toggleMenu}
            className={`p-1 rounded ${
              activeMode === "menu" ? "bg-[#b6c2cf]" : "hover:bg-[#2a2a2a]"
            } transition cursor-pointer`}
          >
            <MoreHorizontal
              size={16}
              className={`${
                activeMode === "menu" ? "text-[#1d2125]" : "text-white"
              }`}
            />
          </button>
        </div>
        <Card listId={id} />

        {activeMode !== "addCard" && (
          <div className="mt-auto p-2">
            <button
              onClick={handleAddCard}
              className="flex items-center text-gray-400 text-sm hover:underline"
            >
              <Plus size={14} className="mr-1" />
              Add a card
            </button>
          </div>
        )}

        {activeMode === "addCard" && (
          <AddListForm
            onCancel={() => setActiveMode(null)}
            actionType="add Card"
            placeholder="Enter a title"
            listId={id}
          />
        )}
        {activeMode === "menu" && <ListActionsMenu onArchive={handleArchive} />}
      </div>
    </div>
  );
};

export default memo(Column);
