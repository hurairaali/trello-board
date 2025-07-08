"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useListStore } from "@/store/store-list";

export default function AddListForm({ onCancel }: { onCancel: () => void }) {
  const [listName, setListName] = useState("");
  const { CreateList } = useListStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim()) {
      CreateList(listName);
      setListName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#18180b] text-white rounded-lg shadow-lg h-fit p-2  font-light animate-in fade-in duration-200 w-[16rem] min-w-[16rem] max-w-[16rem]"
    >
      <input
        type="text"
        placeholder="Enter list name..."
        className=" h-8 p-2 rounded-md bg-[#222218] border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        autoFocus
      />

      <div className="flex items-center gap-3 pt-2 px-0">
        <button
          type="submit"
          className="bg-[#579Dff]  px-4 py-2 font-light rounded-md hover:bg-blue-400 transition text-sm text-[#1D2125]"
        >
          Add list
        </button>
        <button
          type="submit"
          onClick={onCancel}
          aria-label="Cancel"
          className="text-gray-300 hover:text-white transition p-2 rounded-md hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
