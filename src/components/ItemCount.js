import ReactDOM from 'react-dom';
import React , { useState } from "react";
import {Button} from 'react-bootstrap';

function Contador() {

const [state, contador] = useState(0)

const aumentarContador = () => {
  contador(state+1)
}

const disminuirContador = () => {
    contador(state-1)
  }

return (
  <>
    <Button bg="dark" variant="dark" onClick={ aumentarContador }>+</Button>
    <p>Cantidad: {state}</p>
    <Button bg="dark" variant="dark" onClick={ disminuirContador }>-</Button>
  </>
)}

export default Contador;