import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ListStore } from "@/types/types";
import { v4 as uuidv4 } from "uuid";
export const useListStore = create<ListStore>((set, get) => ({
  list: [],
  cards: [],

  // list actions

  // CREATE LIST
  CreateList: (listName: string) => {
    const newList = {
      id: uuidv4(),
      listName: listName,
    };

    set((state) => ({
      list: [...state.list, newList],
    }));
  },

  //RENAME LIST
  renameList: (id: string, newTitle: string) =>
    set((state) => ({
      list: state.list.map((list) =>
        list.id === id ? { ...list, listName: newTitle } : list
      ),
    })),

  // REMOVE LIST
  removeList: (idToRemove: string) =>
    set((state) => ({
      list: state.list.filter((list) => list.id !== idToRemove),
    })),

  // card actions

  // CREATE CARD
  createdCard: (listId: string, cardName: string) => {
    const newCard = {
      id: uuidv4(),
      cardName: cardName,
    };
    set((state) => ({
      cards: [...state.cards, { ...newCard, listId }],
    }));
  },

  // GET CARDS BY LIST ID
  getCardsByListId: (listId: string) =>
    get().cards.filter((card) => card.listId === listId),
}));
