import { Card } from "../game/Card";

interface SlotProps {
  card: Card | null;
  takeCard: (card: Card | null) => void;
}

const Slot = ({ card, takeCard } : SlotProps) => {
  
  return (
    <div className="slot" onClick={() => {if (card) takeCard(card)}}>{card === null ? "null" : card.name}</div>
  )
}

export default Slot