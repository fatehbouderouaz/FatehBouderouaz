import React from "react";

class Header extends React.Component {
    render(){
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
     
        <ul className="nav navbar-nav">
          <li>
            <a href="#"> {this.props.mhome}</a>
          </li>
          <li>
            <a href="#"> {this.props.mabout}</a>
          </li>
          <li>
            <a href="#"> {this.props.mcontact}</a>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}
}

export default Header;
