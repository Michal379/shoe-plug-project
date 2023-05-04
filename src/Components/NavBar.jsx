import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
      
  }

  return (
      <nav className='primary-nav'>
           <NavLink style={navLinkStyles} to='/'>
              Home
           </NavLink>
           <NavLink style={navLinkStyles} to='/SearchBar'>
              Search
           </NavLink>
           <NavLink style={navLinkStyles} to='/ShoppingCart'>
              Cart
           </NavLink>
      </nav>
  )
}

export default Navbar