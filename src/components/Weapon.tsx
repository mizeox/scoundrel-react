import { Card }  from '../game/Card'

interface WeaponProps{
  weapon: Card | undefined;
}

const Weapon = ({weapon}: WeaponProps) => {
  console.log("Weapon is: " + weapon?.name);
  return (
    <div className="weapon">{weapon === undefined ? "undefined" : weapon.name}
    </div>
  )
}

export default Weapon