interface DeckProps {
  cardback: string;
}

const Deck = ({cardback} : DeckProps) => {
  

  return (
    <div className="deck">
      <img src={cardback} alt="card back"></img>
    </div>
  )
}

export default Deck

