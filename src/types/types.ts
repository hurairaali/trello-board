type List = {
  id: string;
  listName: string;
};

type Cards = {
  id: string;
  cardName: string;
  listId: string;
};

export type ListStore = {
  list: List[];
  cards: Cards[];
  CreateList: (name: string) => void;
  renameList: (id: string, newTitle: string) => void;
  removeList: (id: string) => void;
  createdCard: (listId: string, cardName: string) => void;
  getCardsByListId: (listId: string) => Cards[];
};
