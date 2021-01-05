import ReactDOM from 'react-dom';
import React , { useState } from "react";

function Contador() {

const [state, contador] = useState(0)

const aumentarContador = () => {
  contador(state+1)
}

const disminuirContador = () => {
    contador(state-1)
  }

return (
  <div>
    <button onClick={ aumentarContador }>+</button>

    <p>Cantidad: {state}</p>

    <button onClick={ disminuirContador }>-</button>
  </div>
)}

export default Contador;