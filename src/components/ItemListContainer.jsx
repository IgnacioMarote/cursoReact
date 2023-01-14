import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    //Proceso para cargar productos 
    /* useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach((item) => {
            addDoc (itemsCollection, {nombre:item.nombre, precio: item.precio, descripcion: item.descripcion, material:item.material, imagen: item.imagen, stock: item.stock});
        });
    },[]); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const q = query(itemsCollection, where("precio", "<", 1000), limit(3)); //Consulta de Filtrado
        
        // En caso de tener ID, filtro los Productos por ID, sino traigo la collection completa
        const q = id ? query(itemsCollection, where("material", "==", id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setLoading(false);
        });
    }, [id]);
    
    return(
        <div className="container my-5">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
        
    )
}

export default ItemListContainer;