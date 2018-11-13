import React from 'react';
import {connect} from 'react-redux';
import adminActions from '../../actions/adminActions';
import workersSelector from '../../selectors/workers_selectors'
import WorkersListBox from '../presentators/workers/WorkersListBox'
import WorkerDetails from '../presentators/workers/WorkerDetails'
class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedWorker: this.props.workers.workers[0]};
  }
  
  selectWorker(worker) {
    this.setState({selectedWorker: worker});
  }

  render() {
    const { workers } = this.props
    return (
     <div className="workers-page container-fluid">
      <div className="row">
        <WorkersListBox selectedWorker={this.state.selectedWorker} workers={workers} selectWorker={this.selectWorker.bind(this)}/>
        <WorkerDetails worker={this.state.selectedWorker}/>
      </div>
     </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return workersSelector(state, props)
}

const mapDispatchToProps = (dispatch) => {
  return adminActions(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Worker);
