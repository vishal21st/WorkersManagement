import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HelmetCard from './HelmetCard'
class HelmetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHelmets() {
    return this.props.helmets.map((helmet, index) => {
      return (
        <HelmetCard helmet={helmet} key={index}/>
      )
    })
  }

  render() {
    return (
      <div className="helmet-details tile row">
        <div className="col-md-12">
          <h3 className="header">Assigned Helmet</h3>
          <div className="row">
            {this.renderHelmets()}
          </div>
        </div>
          
        
      </div>
    );
  }
}

export default HelmetDetails;
