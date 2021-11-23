import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: 'flex'}}>
      <Link to="/">Inicio</Link>
      <Link to="/tamales">Tamales</Link>
      <Link to="/atoles">Atoles</Link>
      
    </div>
  )
}

export default Navbar
