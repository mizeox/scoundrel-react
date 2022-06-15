export type Suit = 'Spades' | 'Clubs' | 'Diamonds' | 'Hearts';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';

export const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
export const suits: Suit[] = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];

export class Card
{
  private _rank: Rank;
  private _suit: Suit;
  private _value!: number;

  public constructor(rank: Rank, suit: Suit)
  {
    this._rank = rank;
    this._suit = suit;
    this._value = ranks.indexOf(rank) +2;
  }

  public isHigherThan(card: Card): boolean
  {
    return this._value > card._value;
  }

  public get rank(): Rank
  {
    return this._rank;
  }

  public get suit(): Suit
  {
    return this._suit;
  }

  public get name(): string
  {
    return this._rank + ' of ' + this._suit;
  }

  public get value(): number
  {
    return this._value;
  }

  public set value(value: number)
  {
    this._value = value;
  }
}
