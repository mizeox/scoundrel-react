import Slot from './Slot'

const Room = () => {
  return (
    <div className="room">
        <Slot id="slot1" />
        <Slot id="slot2" />
        <Slot id="slot3" />
        <Slot id="slot4" />
    </div>
  )
}

export default Room