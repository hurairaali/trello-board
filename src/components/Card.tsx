import { useListStore } from "@/store/store-list";
import { useMemo } from "react";
interface CardProps {
  listId: string;
}
const Card: React.FC<CardProps> = ({ listId }) => {
  const getCardsByListId = useListStore((state) => state.getCardsByListId);

  const cards = getCardsByListId(listId);

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="min-h-[36px] bg-[#22272b] text-[#B6C2CF] rounded-[8px] p-3 mb-2 pb-2 pt-2"
        >
          <p className="text-sm">{card.cardName}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
