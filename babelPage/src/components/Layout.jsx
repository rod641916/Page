import React from "react";
import '../styles/styles.css';
import logoBabel from '../../public/images/logoBabel.png'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <div className="menubar">
                    <Link to={'/'}><img src={logoBabel} alt="Logo Babel"></img></Link>
                    <ul className="options">
                        <Link to={'/weknow'}>CONÓCENOS</Link>
                        <Link to={'/services'}>SERVICIOS</Link>
                        <Link to={'/clients'}>CLIENTES</Link>
                        <Link to={'/quote_tool'}>COTIZADOR</Link>
                        <Link to={'/weknow'}>CONTACTO</Link>
                    </ul>
                </div>
            </header>
            <main>{children}</main> {/* Esto es importante */}
        </div>
    );
};

export default Layout;
