import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ListStore } from "@/types/types";
import { v4 as uuidv4 } from "uuid";

export const useListStore = create<ListStore>((set) => ({
  list: [],

  CreateList: (listName: string) => {
    const newList = {
      id: uuidv4(),
      listName: listName,
    };

    set((state) => ({
      list: [...state.list, newList],
    }));
  },
}));
