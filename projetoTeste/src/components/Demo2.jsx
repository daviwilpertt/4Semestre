import "./Demo2.css"

import React, { useState } from 'react'
import Usuario from "./Usuario"

function Demo2() {

    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState('')


  return (
      <div className="containerDemo2">
          
        <button className="botaoCont" onClick={() => {setValor(valor + 1)}}>+</button>
            {valor}
        <button className="botaoCont" onClick={() => {setValor(valor - 1)}}>-</button>

        <button onClick={() => {setUsuario(prompt('seu nome: '))}}>fazer login </button>

          {usuario ? <p>ola {usuario}</p> : <p>faça login</p>}

          <Usuario username={usuario} />

      </div>
  )
}

export default Demo2