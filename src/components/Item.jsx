import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) =>{
    return(
        <div className="col-md-3">
            <Link to={"/item/" + item.id} className="text-decoration-none link-dark">
                <div className="card text-center">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <p className="card-text">${item.precio}</p>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default Item;