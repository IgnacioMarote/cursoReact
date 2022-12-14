import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.material === id) : arrayProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);
    
    return(
        <div className="container my-5">
            <ItemList items={items} />
        </div>
        
    )
}

export default ItemListContainer;