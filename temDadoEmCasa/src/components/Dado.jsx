import { GrCircleQuestion } from 'react-icons/gr';
import React, { useState } from 'react'
import './Dado.css'
import { 
  GiBananaPeeled, GiAllSeeingEye, GiBoltSpellCast, GiAk47, GiBoatFishing, GiBattleTank, GiBigEgg, GiBoombox, GiBombingRun,
  Gi3dStairs, GiAirplane, GiBullseye, GiBulldozer, GiBulletBill, GiBurn, GiBullyMinion, GiCamel, GiCannedFish, GiCarKey,
  GiCardJoker, GiCarrot, GiCurledTentacle, GiDesertSkull, GiDivingHelmet, GiDrippingHoney, GiDreamCatcher, GiElephant,
  GiEmptyHourglass, GiFilmStrip, GiFlame, GiFlatTire
} from 'react-icons/gi';

function Dado() {

    const [face, setFace] = useState(GrCircleQuestion)
    
  function jogarDado() {
      
      const faces = [GiFlatTire, GiFlame, GiFilmStrip, GiEmptyHourglass, GiElephant,
        GiDreamCatcher, GiDrippingHoney, GiDivingHelmet, GiDesertSkull, GiCurledTentacle,
        GiCarrot, GiCardJoker, GiCarKey, GiCannedFish, GiCamel, GiBullyMinion, GiBurn,
        GiBulletBill, GiBulldozer, GiBullseye, GiAirplane, Gi3dStairs, GiBoatFishing,
        GiBananaPeeled, GiAllSeeingEye, GiAk47, GiBattleTank, GiBigEgg, GiBoombox, GiBombingRun, GiBoltSpellCast]
      
         const i = Math.floor(Math.random() * faces.length)

         setFace(faces[i])
     }

  return (
      <div className='containerDado1'>
          <div onClick={jogarDado} className='faces'>
            {face}
          </div>

    </div>
  )
}

export default Dado