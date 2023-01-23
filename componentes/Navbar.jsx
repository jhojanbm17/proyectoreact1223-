import React from 'react'
import CartWidget from './CartWidget'
import {Link, link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Rincon Latino </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/inicio'>Inicio</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bebidas</a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to='/Gaseosas'>Gaseosa</Link></li>
                        <li><Link className="dropdown-item" to='/JugosNaturales'>Jugos Naturales</Link></li>
                        <li><Link className="dropdown-item" to='/pulpa'>Pulpas de Fruta</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to='/CartWidget'><CartWidget/></Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar