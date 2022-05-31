import { ICard } from '../App'
import Slot from './Slot'

interface IRoomProps {
  cards: ICard[],
}

const Room = (props: IRoomProps) => {
  return (
    <div className="room">
        <Slot id="slot1" card={props.cards[0]} />
        <Slot id="slot2" card={props.cards[1]} />
        <Slot id="slot3" card={props.cards[2]} />
        <Slot id="slot4" card={props.cards[3]} />
    </div>
  )
}

export default Room