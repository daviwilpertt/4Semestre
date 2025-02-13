import './Body.css'
import React from 'react'
import Dado1 from './Dado1'
import Dado2 from './Dado2'

function Body() {
  return (
      <div className='containerBody'>
          <div className='linha1'>
          <Dado1 />
          <Dado2 />
              
          </div>
    </div>
  )
}

export default Body