import React, { useState } from 'react'
import './Dado2.css'


function Dado2() {

  const [face, setFace] = useState([])
    
    function jogarDado() {
         const faces = [GiBoatFishing, GiBananaPeeled, GiAllSeeingEye, GiAk47, GiBattleTank, GiBigEgg, GiBoombox, GiBombingRun, GiBoltSpellCast]
         const i = Math.floor(Math.random() * faces.length)

         setFace(faces[i])
     }

  return (
      <div className='containerDado1'>
          
          <div onClick={jogarDado} className='faces'>
          { face ? face :  <GrCircleQuestion />}
          </div>

    </div>
  )
}

export default Dado2