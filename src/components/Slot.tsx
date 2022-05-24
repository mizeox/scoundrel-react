import { ICard } from "../App"

interface ISlotProps {
  id: string,
  card: ICard,
}

const Slot = (props: ISlotProps) => {
  return (
    <div className="slot" id={props.id}>{props.card.suit} {props.card.id}</div>
  )
}

export default Slot