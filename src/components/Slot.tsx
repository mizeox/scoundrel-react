import { Card } from "../game/Card";

interface SlotProps {
  card: Card | null;
  takeCard: (card: Card ) => void;
}

const Slot = ({ card, takeCard } : SlotProps) => {
  if(card===null)
  {console.log("Card is null")}
  else{console.log("Card is.... "  + card.name)}

  return (
    <div className="slot" onClick={() => { if (card) takeCard(card) } }>{card === null ? "null" : card.name}</div>
  )
}

export default Slot