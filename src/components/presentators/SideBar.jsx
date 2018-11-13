import React from 'react';
import {NavLink} from 'react-router-dom';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {label: "Workers", url: "/dashboard/workers"},
        {label: "Zones", url: "/zones"},
        {label: "Reports", url: "/reports"},
        {label: "Manage Site", url: "/site"},
        {label: "Settings", url: "/settings"},
      ]
    };
  }

  renderLinks() {
    return this.state.links.map((link, index) => {
      return (
        <li className="sidebar-links__item" key={index}>
          <NavLink activeClassName="active" className="sidebar-link" to={link.url}>
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const { admin }  = this.props
    return (
      <nav className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <NavLink className="brand-logo" to="/">
            <img src="https://static1.squarespace.com/static/59ed9589e45a7c27e9400b3c/t/5a241aa5e2c483bcf3cf4287/1541907203250/?format=1500w" alt="WakeCap Technologies"/>
          </NavLink>
        </div>
        <ul className="list-unstyled components sidebar-links">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}


export default SideBar;
