import { GrCircleQuestion } from 'react-icons/gr';
import React, { useState } from 'react'
import './Dado.css'

function Dado() {

    const [face, setFace] = useState('?')
    const [faces, setFaces] = useState([
      "🔥", "💥", "🌟", "✨", "💫", "🪐", "🌍", "🌎", "🌏", "🌊",
      "🏞️", "🌌", "🛸", "🚀", "🪁", "🎩", "🔮", "🧭", "⏳", "⌛",
      "📯", "📜", "📚", "📖", "💼", "🎒", "🛳️", "⛵", "🚢", "🚂",
      "🚞", "🚈", "🚝", "🚆", "🚇", "🛤️", "⛷️", "🎿", "🏹", "🛡️",
      "⚔️", "🪓", "🔨", "🧰", "🪛", "🔧", "🔩", "🪚", "🪜", "⚙️",
      "🧱", "🏗️", "🏠", "🏡", "🏢", "🏬", "🏣", "🏥", "🏦", "🏨",
      "🏪", "🏫", "🏛️", "🏙️", "🌆", "🌇", "🌃", "🏙️", "🗺️", "🛤️",
      "🛣️", "🌉", "🗼", "🗽", "🏰", "🛕", "⛩️", "🕌", "🕍", "⛪",
      "🕋", "🛐", "⛓️", "🔗", "🔒", "🔓", "🔑", "🗝️", "🛍️", "🎁",
      "📦", "📤", "📥", "📬", "📮", "🖋️", "🖊️", "🖌️", "🖍️", "✏️"
    ])
    
  function jogarDado() {
      
      
         const i = Math.floor(Math.random() * faces.length)

    setFace(faces[i])
    setFaces(faces.filter((e)=> e != faces[i]))
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