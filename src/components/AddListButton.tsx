// components/AddListButton.tsx
"use client";

import { Plus } from "lucide-react";

export default function AddListButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center h-fit gap-2 px-4 p-3 font-light rounded-xl bg-white/25 text-white hover:bg-purple-400 transition  w-64 min-w-64 max-w-64"
    >
      <Plus size={16} />
      Add another list
    </button>
  );
}
