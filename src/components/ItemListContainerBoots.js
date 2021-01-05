import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import Contador from './ItemCount';

function ItemContenedorBoot(){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/producto_01.jpg" />
            <Card.Body>
                <Card.Title>Nombre del producto</Card.Title>
                    <Card.Text>
                        Esta es la descripción del producto.
                    </Card.Text>
                    <Contador />
            </Card.Body>
        </Card>
    )
}

export default ItemContenedorBoot;