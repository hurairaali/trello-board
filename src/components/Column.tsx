// components/Column.tsx
import { FC, memo } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import ListActionsMenu from "@/components/ListActionsMenu";
import AddListForm from "@/components/Modal";
import { useColumnLogic } from "@/hooks/useColumnLogic";
import Button from "./Button";
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
    <div className="bg-[#181818] rounded-lg shadow-md p-3 pt-2 pb-2  flex flex-col justify-between h-fit w-72 relative">
      <div ref={menuRef}>
        <div className="flex justify-between items-center p-0">
          {activeMode === "editing" ? (
            <input
              type="text"
              value={editListName}
              onChange={handleEditInputChange}
              onBlur={listRename}
              autoFocus
              className=" h-8 pl-2  rounded-md bg-[#222218]  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-md font-semibold"
            />
          ) : (
            <Button variant="default" onClick={startEditing}>
              <span className="ds-text pl-2 text-md font-semibold">
                {listName}
              </span>
            </Button>
          )}

          <button
            onClick={toggleMenu}
            className={`p-0 rounded ${
              activeMode === "menu" ? "bg-[#b6c2cf]" : "hover:bg-[#2a2a2a]"
            } transition cursor-pointer`}
          >
            <MoreHorizontal
              size={14}
              className={`${
                activeMode === "menu" ? "text-[#1d2125]" : "text-white"
              }`}
            />
          </button>
        </div>

        <Card listId={id} />

        {activeMode !== "addCard" && (
          <div className="mt-auto">
            <Button onClick={handleAddCard} variant="ghost" className="w-full">
              <Plus size={17} className="mr-1" />
              Add a card
            </Button>
          </div>
        )}

        {activeMode === "addCard" && (
          <AddListForm
            onCancel={() => setActiveMode(null)}
            actionType="Add card"
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
