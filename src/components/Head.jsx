import React from 'react';

import {Link} from 'react-router-dom';

class Head extends React.Component {
  renderLinks() {
    if (this.props.admin.email) {
      return (
        <ul className="nav navbar-nav ml-auto ">
          <li className="nav-item active">
            <a className="nav-link" href="javascript:void(0\)" onClick={() => {this.props.logout()}}>Logout<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar main-header">
        <button className="btn-toggle visible-xs visible-sm" type="button" onClick={() => {this.props.toggle()}}>
          <i className="fa fa-bars"></i>
        </button>
        {this.renderLinks()}
      </nav>
    );
  }
}

export default Head;
