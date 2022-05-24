import "./App.css"
import Deck from './components/Deck'
import DiscardPile from './components/DiscardPile'
import Room from './components/Room'
import Weapon from './components/Weapon'
import MonstersKilled from './components/MonstersKilled'
import React from "react"

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
  constructor(props: IProps) {
    super(props);

    this.state = {
      room: [
        { id: 1, suit: "Heart" },
        { id: 2, suit: "Heart" },
        { id: 3, suit: "Heart" },
        { id: 4, suit: "Heart" },
      ]
    };
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
    this.setState((state) => {
      return {
        room: [
          { id: 1, suit: "Spade" },
          { id: 2, suit: "Spade" },
          { id: 3, suit: "Spade" },
          { id: 4, suit: "Spade" },
        ]
      }
    });
  }
}

export default App;
