import React, { useState } from 'react'
import './Dado1.css'
import { GiBananaPeeled } from "react-icons/gi";
import { GiAllSeeingEye } from "react-icons/gi";
import { GiBoltSpellCast } from "react-icons/gi";
import { GiAk47 } from "react-icons/gi";
import { GiBoatFishing } from "react-icons/gi";
import { GiBattleTank } from "react-icons/gi";
import { GiBigEgg } from "react-icons/gi";
import { GiBoombox } from "react-icons/gi";
import { GiBombingRun } from "react-icons/gi";
import { GrCircleQuestion } from 'react-icons/gr';


function Dado1() {

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

export default Dado1