import React from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <a href='#'> Logo </a>
          <ul>
            <NavLink className='navlink' exact to='/'>Home</NavLink>
            <NavLink className='navlink'  to='/about'>About</NavLink>
            <NavLink className='navlink'  to='/list'>Liste</NavLink>
            <NavLink className='navlink'  to='/blog'>Blog</NavLink>
            <NavLink className='navlink'  to='/quran'>Quran</NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
