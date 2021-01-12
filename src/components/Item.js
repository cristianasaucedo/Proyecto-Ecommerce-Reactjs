import React from 'react';
import { Card } from 'react-bootstrap';
import Contador from './ItemCount';
import prodCargados from './ItemList';

function Item(){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://d34zlyc2cp9zm7.cloudfront.net/products/c261c94c8d41c6d9a8b6a79e9b9641ed42516032e1cc146377835818e8345ce6.jpg_500" />
            <Card.Body>
                <Card.Title>Nombre del producto</Card.Title>
                    <Card.Text>
                        Marca
                    </Card.Text>
                    <Card.Text>
                        Precio del producto.
                    </Card.Text>
                    <Contador />
            </Card.Body>
        </Card>
    )
}

export default Item;