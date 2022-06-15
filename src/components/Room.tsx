import Slot from './Slot'
import { Card } from '../game/Card'

interface RoomProps {
  arr: Array<Card | null>;
  takeCard: React.MouseEventHandler<HTMLDivElement>;
}

const Room = ({arr, takeCard}: RoomProps) => {
    return (
    <div className="room">
        <Slot card={arr[0]} takeCard={takeCard}/>
        <Slot card={arr[1]} takeCard={takeCard}/>
        <Slot card={arr[2]} takeCard={takeCard}/>
        <Slot card={arr[3]} takeCard={takeCard}/>
    </div>
  )
}

export default Room