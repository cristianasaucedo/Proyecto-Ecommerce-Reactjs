import React from 'react';
import { Card, CardGroup, CardDeck, CardColumns } from 'react-bootstrap';
import Contador from './ItemCount';
import { Link } from 'react-router-dom';

function Item ({id, nombre, imagen, precio}) {
    return(
        <CardColumns>
            <Card>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                    <Card.Text>
                        <Link to={'/item/' + id}>Ver más</Link>
                    </Card.Text>
                    <Contador />
                </Card.Body>
            </Card>
        </CardColumns>
    )
}

export default Item;