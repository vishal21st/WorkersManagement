import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import Head from '../Head';
import adminActions from '../../actions/adminActions';
import InputField from '../presentators/form_components/InputField'
import SideBar from '../presentators/SideBar';
import Worker from './Worker';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowSideBar: false};
  }

  toggleSideBar() {
    this.setState({isShowSideBar: !this.state.isShowSideBar})
    let that = this
    setTimeout(function() {
      let el = document.getElementsByClassName("dashboard")[0]
      if (el) {
        if (that.state.isShowSideBar) {
          
          el.classList.add('show-sidebar')
        } else {
          el.classList.remove('show-sidebar')
        }  
      }  
    })
  }

  logout() {
    this.props.history.push("/login")
  }

  render() {
    const { admin }  = this.props
    return (
      <div className="main-wrapper dashboard" refs="mainWrapper">
        <SideBar/>
        <div className="page-content">
          <Head admin={admin} toggle={this.toggleSideBar.bind(this)} logout={this.logout.bind(this)}/>
          <Route path="/dashboard/workers" component={Worker} />
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return adminActions(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
