import React from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";

const Documento = () =>{
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "productos", "Qa7qKCmLDAHQH63PsJEu");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El Producto No Existe!");
            }
        });
    },[]);



    return(
        <h1>Documento</h1>
    )
}

export default Documento;