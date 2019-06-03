import React, { Component} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../bootstrapCss/cover/cover.css"

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}


class Navigation extends Component {
  render() {
  return (
   
    <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">One Nights</a>
  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
    <ul className="navbar-nav">
      <NavItem path="/" name="Home" className="nav-link" />
      <NavItem path="/page2" name="Page2" className="nav-link" />
      <NavItem path="/page3" name="Disabled" disabled="true" className="nav-link disabled"/>
            
      
      <li className="nav-item dropdown">
       
        <a className="nav-link dropdown-toggle" href="/" id="dropdown08" data-toggle="dropdown" role="button"  aria-haspopup="true" aria-expanded="false">Dropdown</a>
        
        <div className="dropdown-menu" aria-labelledby="dropdown08">
         
<NavDropdown name="Dropdown">
          <a className="dropdown-item" href="/">Action</a>
         
          <a className="dropdown-item" href="/">Another action</a>
         
          <a className="dropdown-item" href="/">Something else here</a>
          </NavDropdown>
        </div>
      </li>
    </ul>
  </div>
</nav>
  );
  }}
  export default Navigation;