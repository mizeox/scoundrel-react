import Card, {Rank, Suit, ranks, suits} from './Card';
import { useState } from 'react';

const Deck = () => {
  const [cards, setCards] = useState<typeof Card[]>();

  const createDeck = () => {
    for (const suit of suits)
    {
      for (const rank of ranks)
      {
        //loop to add cards
        
      }
    }
  }

  return (
    <div className="deck">deck</div>
  )
}

export default Deck