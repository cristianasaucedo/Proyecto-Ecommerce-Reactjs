import React from 'react';
import productos from './components/ListaProductos';

const Prod = ({ productos }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const ListaProductos = new Promise((res, rec) => {
            setTimeout(() => {
                res(productos)
                rec("Error")
            }, 2000)
        })

        ListaProductos.then((prodCargados)=>{
            setItems(prodCargados);
        }).catch((prodCargados) => {
            console.log({ prodCargados })
        })
    })

    export default prodCargados;