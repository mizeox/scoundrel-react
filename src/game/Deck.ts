import {Card, ranks, suits} from './Card';

export class Deck
{
  private _cards: Card[];

  public constructor()
  {
    this._cards = [];

    for (const suit of suits)
    {
      for (const rank of ranks)
      {
        this._cards.push(new Card(rank, suit));
      }
    }
  }

  public shuffle(): void
  {
    for (let i = 0; i < this._cards.length; i++ )
    {
      const rand = Math.floor(Math.random() * this._cards.length);
      const temp = this._cards[i];
      this._cards[i] = this._cards[rand];
      this._cards[rand] = temp;
    }
  }

  public draw(): Card
  {
    return <Card> this._cards.pop();
  }

  public isEmpty(): boolean
  {
    return !this._cards.length;
  }

  public numberOfCardsLeft(): number
  {
    return this._cards.length;
  }

  public get cards(): Card[]
  {
    return this._cards;
  }

  public set cards(value: Card[])
  {
    this._cards = value;
  }
}
