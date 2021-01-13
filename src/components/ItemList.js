import React from 'react';
import Item from './Item';

function ItemList({productos}){
    return (
        <div>
            {productos.map ( producto => 
            <Item
            id={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            marca={producto.marca}
            precio={producto.precio}
            categoria={producto.categoria}
            descripcion={producto.categoria}
             />
            )}
        </div>
    )
}

export default ItemList;