import { FC } from "react";

interface ListActionsMenuProps {
  onArchive?: () => void;
}

const ListActionsMenu: FC<ListActionsMenuProps> = ({ onArchive }) => {
  return (
    <div
      className="absolute top-[48px] left-[249px] w-[304px]  z-50 p-2"
      style={{
        backgroundColor: "#282e33",
        borderRadius: "8px",
        boxShadow:
          "var(--ds-shadow-overlay, 0px 8px 12px #091e4226, 0px 0px 1px #091e424f)",
      }}
    >
      <div className="text-center text-[14px] font-semibold text-[#9fadbc] mb-2">
        List actions
      </div>

      <button
        onClick={onArchive}
        className="w-full text-left text-[14px] font-normal text-[#9fadbc] px-3 py-2 hover:bg-[#3a4049] rounded"
      >
        Archive this list
      </button>
    </div>
  );
};

export default ListActionsMenu;
