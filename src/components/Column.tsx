// components/Column.tsx
import { FC } from "react";
import { Plus, MoreHorizontal } from "lucide-react";

interface ColumnProps {
  title: string;
}

const Column: FC<ColumnProps> = ({ title }) => {
  return (
    <div className="bg-[#181818] rounded-lg shadow-md p-4 flex flex-col justify-between h-fit w-72">
      <div className="flex justify-between items-start mb-4">
        <span className="ds-text  lowercase text-md">{title}</span>
        <MoreHorizontal size={20} className="text-white" />
      </div>

      <div className="mt-auto">
        <button className="flex items-center text-gray-400 text-sm hover:underline">
          <Plus size={14} className="mr-1" />
          Add a card
        </button>
      </div>
    </div>
  );
};

export default Column;
