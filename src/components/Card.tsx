import { useListStore } from "@/store/store-list";
interface CardProps {
  listId: string;
}
const Card: React.FC<CardProps> = ({ listId }) => {
  const getCardsByListId = useListStore((state) => state.getCardsByListId);

  const cards = getCardsByListId(listId);
  console.log(cards, "cards");
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className=" bg-[#22272b] text-[#B6C2CF] rounded-[8px] mt-2 p-2 mb-2 pb-2 pt-2"
        >
          <p className="text-sm break-words whitespace-pre-wrap">
            {card.cardName}
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
