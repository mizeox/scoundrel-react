import "./App.css"
import Deck from './components/Deck'
import DiscardPile from './components/DiscardPile'
import Room from './components/Room'
import Weapon from './components/Weapon'
import MonstersKilled from './components/MonstersKilled'
import { useState } from 'react';
import { Scoundrel } from './game/Scoundrel';
import { Card } from "./game/Card"



function App() {

  let game = new Scoundrel();

  let _room = game.room;
  let _weapon = game.weapon;
  let _monstersKilled = game.monstersKilled;
  let _deck = game.deck;
  let _discardPile = game.discardPile;

  const[state, setState] = useState({ deck: _deck, room: _room, discardPile: _discardPile, weapon: _weapon, monstersKilled: _monstersKilled })

  function updateState() {
    setState({ deck: game.deck, room: game.room, discardPile: game.discardPile, weapon: game.weapon, monstersKilled: game.monstersKilled })
  }

  return (
    <div className="App">
      <h1>Scoundrel</h1>
      <button onClick={() => restart()}>New Game</button>
      <button>Avoid</button>
      <div className="playArea">
        <Deck />
        <Room arr={state.room} takeCard={ card => takeCard(card) }/>
        <DiscardPile />
        <Weapon />
        <MonstersKilled />        
      </div>   
    </div>
  );

  function restart()
  {
    game.restart();
    game.fillRoom();
    updateState();
  }

  function takeCard(card: Card)
  {
    console.log("taking card..." + card.name)
    game.resolveCard(card);
    updateState();
  }
}


export default App;
