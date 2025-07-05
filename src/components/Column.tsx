// components/Column.tsx
import { FC } from "react";

interface ColumnProps {
  title: string;
}

const Column: FC<ColumnProps> = ({ title }) => {
  return (
    <div className="bg-white w-64 rounded shadow-md p-4 flex-shrink-0">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {/* Cards would go here in the future */}
    </div>
  );
};

export default Column;
