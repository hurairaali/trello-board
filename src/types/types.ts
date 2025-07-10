type List = {
  id: string;
  listName: string;
};

export type ListStore = {
  list: List[];
  CreateList: (name: string) => void;
  renameList: (id: string, newTitle: string) => void;
  removeList: (id: string) => void;
};
