export type Suit = 'Spades' | 'Clubs' | 'Diamonds' | 'Hearts';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const suits: Suit[] = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];

const Card = ({ rank, suit } : {rank: Rank, suit: Suit}) => {

    const id: string = rank + suit.charAt(0);

    const card = {
        id: rank + suit.charAt(0),
        _rank: rank,
        _suit: suit,
        _value: ranks.indexOf(rank)+2,
        img: `../public/img/${id}.png`,
        imgBack: '../public.img/purple_back.png',
        render: false,
        showFront: false,
    }

    if(card.render){
        return <img src={card.img} alt={card.id} />;
    }
    return <></>;    
}

export default Card