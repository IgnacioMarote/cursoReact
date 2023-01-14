import React from "react";

const Footer = () =>{
    return(
        <footer className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <img src="/images/logoRoque-blanco.png" alt="Logo roque" />
                        <ul className="d-flex list-inline text-center mx-5">
                            <li>Home</li>
                            <li>Joyas</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="col-md-6 ">
                        <p>Metodos de pago</p>
                        <img src="/images/medios-pagos.png" alt="Metodos de pago" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;