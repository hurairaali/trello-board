"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AddListForm({
  onAdd,
  onCancel,
}: {
  onAdd: (name: string) => void;
  onCancel: () => void;
}) {
  const [listName, setListName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim()) {
      onAdd(listName.trim());
      setListName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#18180b] text-white rounded-lg shadow-lg h-fit p-4 space-y-4 font-light animate-in fade-in duration-200 w-[16rem] min-w-[16rem] max-w-[16rem]"
    >
      <input
        type="text"
        placeholder="Enter list name..."
        className="w-full p-2 rounded-md bg-[#222218] border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        autoFocus
      />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-[#60aaff] text-white px-4 py-2 rounded-md hover:bg-blue-400 transition text-sm"
        >
          Add list
        </button>
        <button
          type="button"
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
