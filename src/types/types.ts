type List = { id: string; listName: string };

export type ListStore = {
  list: List[];
  CreateList: (name: string) => void;
};
