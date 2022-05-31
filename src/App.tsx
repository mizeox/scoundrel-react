import "./App.css"
import Deck from './components/Deck'
import DiscardPile from './components/DiscardPile'
import Room from './components/Room'
import Weapon from './components/Weapon'
import MonstersKilled from './components/MonstersKilled'
import React from "react"
import { Game } from "./game/game"

interface IProps {
}

export interface ICard {
  id: number,
  suit: string,
}

interface IState {
  room: ICard[],
}

class App extends React.Component<IProps, IState> {
  game: Game;

  constructor(props: IProps) {
    super(props);
    this.game = new Game();
    this.state = this.gameToState(this.game);
  }

  render() {
    return (
      <div className="App">
        <h1>Scoundrel</h1>
        <button onClick={() => this.onNewGame()}>New Game</button>
        <div className="playArea">
          <Deck />
          <Room cards={this.state.room}/>
          <DiscardPile />
          <Weapon />
          <MonstersKilled />      
        </div>
      </div>
    );
  }

  onNewGame() {
    this.game = new Game();
    this.setState((state) => this.gameToState(this.game));
  }

  gameToState(game: Game): IState
  {
    return {
      room: this.game.room.map((card) => { return { id: card.value, suit: card.suit } })
    }
  }
}

export default App;
