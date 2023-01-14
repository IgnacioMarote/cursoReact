import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" ><img src="/images/logoRoque.png" alt="0800 Don Rouch" width="100"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"./"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"category/PLATA"}>Plata</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"category/ORO"}>Oro</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"category/ORO ROSA"}>Oro Rosa</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-end">
                        <CartWidget />
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default NavBar;