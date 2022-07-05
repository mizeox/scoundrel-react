import {Deck} from './Deck';
import {Card, Rank, Suit} from './Card';

const _maxHealth: number = 20;

export class Scoundrel
{
  private _deck: Deck;
  private _room: (Card | null) [];
  // eslint-disable-next-line no-unused-vars
  private _rankValues?: {[rank in Rank] : number};
  private _health: number;
  private _weapon?: Card;
  private _canAvoid: boolean;
  private _score?: number;
  private _discardPile: Card[];
  private _potionUsed: boolean;
  private _monstersKilled: Card[];

  constructor()
  {
    this._deck = new Deck();
    this.gameSetup();
    this._room = [null, null, null, null];
    this._health = _maxHealth;
    this._canAvoid = true;
    this._potionUsed = false;
    this._monstersKilled = [];
    this._discardPile = [];
  }

  private gameSetup(): void
  {
    const suitsToRemove: Suit[] = ['Diamonds', 'Hearts'];
    const ranksToRemove: Rank[] = ['Jack', 'Queen', 'King', 'Ace'];

    this._rankValues = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14};

    this._deck.cards = this._deck.cards.filter((card) => !(ranksToRemove.includes(card.rank) && suitsToRemove.includes(card.suit)));

    this._deck.shuffle();
  }

  getValueOfCard(card: Card)
  {
    return this._rankValues![card.rank];
  }

  cardInRoomAt(index: number): Card | null
  {
    return this._room[index];
  }

  takeCard(card: Card): void
  {
    const cardSlot = this._room.indexOf(card);
    this._room[cardSlot] = null;
  }

  resolveCard(card: Card, fightWithWeapon = false): void
  {
    if(this.health <=0){return}
    
    this.takeCard(card);
    this._canAvoid = false;
    const suit: string = card.suit;

    switch (suit)
    {
      case 'Hearts':
        this.takePotion(card);
        break;
      case 'Diamonds':
        this.equipWeapon(card);
        break;
      case 'Clubs':
      case 'Spades':
        if (fightWithWeapon)
        {
          this.fightWithWeapon(card);
        }
        else
        {
          this.fightBareHanded(card);
        }
    }
    if (this.roomCleared() && !this.isGameOver())
    {
      this._canAvoid = true;
      this._potionUsed = false;
      this.fillRoom();
    }
  }

  discard(card: Card): void
  {
    this._discardPile.push(card);
  }

  fightWithWeapon(monster: Card): void
  {
    let attackValue = monster.value - this._weapon!.value;
    if (attackValue < 0) attackValue = 0;
    this._health -= attackValue;
    this._monstersKilled.push(monster);
  }

  fightBareHanded(monster: Card): void
  {
    const attackValue = monster.value;
    this._health -= attackValue;
    this.discard(monster);
  }

  fightWithWeaponPossible(monster: Card): boolean
  {
    if (this._monstersKilled.length === 0) return true;

    const lastKilledMonster = this._monstersKilled.at(-1);
    return lastKilledMonster!.value > monster.value;
  }

  takePotion(potion: Card): void
  {
    if (this._potionUsed) return;

    const potionValue = potion.value;
    this._health += potionValue;
    if (this._health > 20) this._health = 20;
    this._potionUsed = true;
    this.discard(potion);
  }

  equipWeapon(card: Card): void
  {
    if (this._weapon === undefined)
    {
      this._weapon = card;
    }
    else
    {
      this.discard(this._weapon);
      this._weapon = card;
      this._monstersKilled.forEach((monster) =>
      {
        this.discard(monster);
      });
      this._monstersKilled = [];
    }
  }

  isMonsterCard(card: Card): boolean
  {
    return card.suit === 'Spades' || card.suit === 'Clubs'
  }

  avoidRoom(): void
  {
    if (this._canAvoid)
    {
      this._room.forEach((card) =>
      {
        this._deck.cards.unshift(card!);
        const index = this._room.indexOf(card);
        this._room[index] = null;
      });
    }
    this._canAvoid = false;
    this.fillRoom();
  }

  roomCleared(): boolean
  {
    return this.room.filter((slot) => slot === null).length === 3;
  }

  getRoom(): (Card | null)[]
  {
    return this._room;
  }

  private fillRoom(): void
  {
    for (let i = 0; i < this._room.length; i++)
    {
      if (this._room[i] === null)
      {
        const card: Card = this._deck.draw();
        this._room[i] = card;
      }
    }
  }

  isGameOver(): boolean
  {
    return this.health <= 0 || (this._deck.isEmpty() && this.roomCleared());
  }

  scoring(): number
  {
    if (this._health <= 0)
    {
      this._health = 0;
      this._score = this._health;
      for (const card of this._deck.cards)
      {
        if (card.suit === 'Spades' || card.suit === 'Clubs')
        {
          this._score -= card.value;
        }
      }
    }
    else if (this._deck.isEmpty() && this.roomCleared())
    {
      const lastCardSlot: (Card | null)[] = this._room.filter((slot) => slot !== null);
      const lastCard = lastCardSlot[0];

      if (this._health === _maxHealth && lastCard!.suit === 'Hearts')
      {
        this._score = this._health + lastCard!.value;
      }
    }
    else
    {
      this._score = this._health;
    }
    return this._score!;
  }

  public get health(): number
  {
    return this._health;
  }

  public get weapon(): Card
  {
    return this._weapon!;
  }

  public get canAvoid(): boolean
  {
    return this._canAvoid;
  }

  public get monstersKilled(): Card[]
  {
    return this._monstersKilled;
  }

  public get room(): (Card | null)[]
  {
    return this._room;
  }

  public get potionUsed(): boolean
  {
    return this._potionUsed;
  }

  public get deck(): Deck {
    return this._deck;
  }

  public get discardPile(): Card[] {
    return this._discardPile;
  }

  restart(): void 
  {
    this._deck = new Deck();
    this.gameSetup();
    this._room = [null, null, null, null];
    this._health = _maxHealth;
    this._canAvoid = true;
    this._potionUsed = false;
    this._monstersKilled = [];
    this._discardPile = [];
    this.fillRoom();
  }
}

