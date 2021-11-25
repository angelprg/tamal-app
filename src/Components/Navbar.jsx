import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Navbar = ({cartItems, emptyCart}) => {
  return (
    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <Link to="/">Inicio</Link>
      <Link to="/tamales">Tamales</Link>
      <Link to="/atoles">Atoles</Link>
      <Cart cartItems={cartItems} emptyCart={emptyCart} />
    </div>
  )
}

export default Navbar
