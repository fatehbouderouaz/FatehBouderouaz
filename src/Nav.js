import React from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='navbar-header'>
          <Link  to='/' > Logo </Link>
          <ul>
            <NavLink className='navlink' exact to='/'>Home</NavLink>
            <NavLink className='navlink'  to='/about'>About</NavLink>
            <NavLink className='navlink'  to='/communes'>communes</NavLink>
            <NavLink className='navlink'  to='/list'>Liste</NavLink>
            <NavLink className='navlink'  to='/blog'>Search</NavLink>
            <NavLink className='navlink'  to='/quran'>Quran</NavLink>
            <NavLink className='navlink'  to='/souars'>Souars</NavLink>
            <NavLink className='navlink'  to='/todo'>Todo</NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
