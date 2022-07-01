import "./App.css"
import Deck from './components/Deck';
import DiscardPile from './components/DiscardPile';
import Room from './components/Room';
import Weapon from './components/Weapon';
import MonstersKilled from './components/MonstersKilled';
import { useState } from 'react';
import { Scoundrel } from './game/Scoundrel';
import { Card } from "./game/Card";
import type { Deck as DrawDeck } from "./game/Deck";

let game = new Scoundrel();
game.fillRoom();

interface GameState {
  deck?: DrawDeck;
  room?: (Card | null) [];
  discardPile?: Card[];
  weapon?: Card | undefined;
  monstersKilled?: Card[];
  health?: number;
}

function App() {

  const[state, setState] = useState<GameState>({ 
    deck: game.deck, 
    room: game.room,
    discardPile: game.discardPile, 
    weapon: game.weapon, 
    monstersKilled: game.monstersKilled, 
    health: game.health,
  })

  return (
    <div className="App">
      <h1>Scoundrel</h1>
      <div>{state.health! <=0 || (game.deck.isEmpty() && game.roomCleared()) ? 'Game over. You scored ' + game.scoring() + ' points.' : ""}</div>
      <button onClick={() => restart()}>New Game</button>
      <button onClick={() => avoid()} disabled={game.canAvoid === false}>Avoid</button>
      <div>Health: {state.health}</div>
      <div className="playArea">
        <Deck />
        <Room arr={state.room!} takeCard={card => takeCard(card!)}/>
        <DiscardPile />
        <Weapon weapon={state.weapon}/>
        <MonstersKilled monsters={state.monstersKilled}/>        
      </div>   
    </div>
  );
  
  function avoid()
  {
    game.avoidRoom();
    setThatState();
  }

  function restart()
  {
    game.restart();
    game.fillRoom();
    setThatState();
  }

  function setThatState()
  {
    setState({
      room: game.room,
      health: game.health,
      weapon: game.weapon,
      monstersKilled: game.monstersKilled,
    })
  }

  function takeMonsterCard(card: Card)
  {
    if(game.weapon === undefined || game.fightWithWeaponPossible(card) === false)
    {
      game.resolveCard(card, false);
      setThatState();
      
      return;
    }
    let answer = "";
    if(game.weapon !== undefined && game.fightWithWeaponPossible(card))
    {
      do
      {
      answer = prompt("Fight with Weapon? [Y/N]")!.toUpperCase();
      }
      while (answer !== 'Y' && answer!== 'N');
    }
   
    if(answer === 'N')
    {
      game.resolveCard(card)
    }
    else
    {
      game.resolveCard(card, true)
    }

    setThatState();
  }

  function takeCard(card: Card)
  {
    console.log("taking the card..." + card.name)
    
    if(card.suit === "Spades" || card.suit === "Clubs")
    {  
      takeMonsterCard(card);
      if(game.roomCleared() && !game.isGameOver()) {game.fillRoom()}
      return;
    }
    game.resolveCard(card);
    if(game.roomCleared() && !game.isGameOver()) {game.fillRoom()}
    setThatState();
  }
}


export default App;
