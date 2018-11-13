import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import adminActions from '../actions/adminActions';


import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
class App extends React.Component {
  render(){
    const admin = this.props
    return(
      <BrowserRouter>
        <div className="main-container">
          <Route exact path="/login" component={Login}/>
          <Route  path="/dashboard" component={Dashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state.admin
}

const mapDispatchToProps = (dispatch) => {
  return adminActions(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

