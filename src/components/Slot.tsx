const Slot = ({ id } : { id: string }) => {
  return (
    <div className="slot" id={id}>{id}</div>
  )
}

export default Slot