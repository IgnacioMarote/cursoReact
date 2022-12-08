import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
        <div className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 offset-md-2 ">
                <h1 className="">{item.nombre}</h1>
                <h6 className="">ANILLO - {item.material}</h6>
                <h3 className="">${item.precio}</h3>
                <p className="">{item.descripcion}</p>
                <ItemCount stock={item.stock}/>
            </div>
            
        </div>

        
    )
}

export default ItemDetail;