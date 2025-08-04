import { useState, useRef, ChangeEvent } from "react";
import { useClickAway } from "react-use";
import { useListStore } from "@/store/store-list";

export const useColumnLogic = (
  id: string,
  listName: string,
  setIsAdding: (v: boolean) => void
) => {
  const menuRef = useRef(null);
  const renameList = useListStore((state) => state.renameList);
  const removeList = useListStore((state) => state.removeList);

  const [activeMode, setActiveMode] = useState<
    null | "menu" | "addCard" | "editing" | "addingList"
  >(null);
  const [editListName, setEditListName] = useState(listName);

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditListName(e.target.value);
  };

  const listRename = () => {
    const trimmedName = editListName.trim();
    if (trimmedName && trimmedName !== listName) {
      renameList(id, trimmedName);
    }
    setActiveMode(null);
  };

  const handleArchive = () => {
    removeList(id);
    setActiveMode(null);
  };

  const toggleMenu = () => {
    setActiveMode(activeMode === "menu" ? null : "menu");
    setIsAdding(false);
  };

  const handleAddCard = () => {
    setActiveMode("addCard");
    setIsAdding(false);
  };

  const startEditing = () => {
    setActiveMode("editing");
    setIsAdding(false);
  };

  useClickAway(menuRef, () => activeMode !== "editing" && setActiveMode(null));

  return {
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
  };
};
