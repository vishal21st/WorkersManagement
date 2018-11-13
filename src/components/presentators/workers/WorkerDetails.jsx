import React from 'react';
import {connect} from 'react-redux';
import WorkerDetailsHeader from './WorkerDetailsHeader'
import WorkingHoursDetail from './WorkingHoursDetail'
import HelmetDetails from './HelmetsDetail'
class WorkerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { worker } = this.props
    return (
     <div className="worker-details col-md-9">
      <WorkerDetailsHeader worker={worker} />
      <WorkingHoursDetail worker={worker} />
      <HelmetDetails helmets={worker.helmets} />
     </div>
    );
  }
}

export default WorkerDetails;
