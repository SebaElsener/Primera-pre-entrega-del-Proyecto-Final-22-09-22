
import React from 'react'
import CartWidget from './CartWidget.js'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className='navBrand'>
                <h1><a href='#' className='brandName'><span className='IE'>IE</span> Reparaciones</a></h1>
            </div>
            <ul>
                <li><a href='#'>PRODUCTOS</a></li>
                <li><a href='#'>SERVICIOS</a></li>
                <li><a href='#'>SOBRE NOSOTROS</a></li>
                <li><a href='#'>CONTACTO</a></li>
                <li><a href='#'>INICIO</a></li>
                <li><a href='#' className='carrito'>{<CartWidget />}</a></li>
            </ul>
        </nav>
    )
}

export default NavBar