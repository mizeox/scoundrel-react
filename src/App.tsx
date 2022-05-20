import "./App.css"
import Deck from './components/Deck'
import Card from './components/Card'
import DiscardPile from './components/DiscardPile'
import Room from './components/Room'
import Weapon from './components/Weapon'
import MonstersKilled from './components/MonstersKilled'


function App() {
  return (
    <div className="App">
      <h1>Scoundrel</h1>
      <button>New Game</button>
      <div className="playArea">
        <Deck />
        <Room />
        <DiscardPile />
        <Weapon />
        <MonstersKilled />      
      </div>
    </div>
  );
}

export default App;
