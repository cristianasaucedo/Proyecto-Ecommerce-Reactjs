import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

function ItemListContainer ({productos}){
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
       setItem(productos) 
    }, [id, productos])

    return (
        <div>
            <ItemList productos={item} />
        </div>
    )
}

export default ItemListContainer;