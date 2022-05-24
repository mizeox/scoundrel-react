export class Card
{
    public suit: string;
    public value: number;

    constructor(suit: string, value: number)
    {
        this.suit = suit;
        this.value = value;
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

export class Game
{
    public room: Card[];
    constructor()
    {
        this.room = [];
        this.randomizeRoom();
    }

    randomizeRoom()
    {
        this.room = [];
        for (let i = 0; i < 4; i++)
        {
            this.room.push(this.randomCard());
        }
    }

    randomCard()
    {
        return new Card("Heart", getRandomInt(13));
    }
}