import { Card }  from '../game/Card'

interface WeaponProps{
  weapon: Card | undefined;
}

const Weapon = ({weapon}: WeaponProps) => {
  return (
    <div className="weapon">{weapon === undefined ? "undefined" : weapon.name}
    </div>
  )
}

export default Weapon