import { Card } from '../game/Card'

interface MonsterKilledProps {
  monsters?: Card[];
}

const MonstersKilled = ({monsters}: MonsterKilledProps) => {
  console.log("monster length: " + monsters?.length)
  return (    
    <div className="monsters">{ monsters?.length === 0 ? "Monsters Killed" : monsters?.map((monster) => monster.name) }</div>
  )
}

export default MonstersKilled