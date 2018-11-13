import React from 'react';
import InputField from '../form_components/InputField'
import WorkerListItem from './WorkerListItem'
class WorkersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: "" };
  }

  workersList() {
    const { selectedWorker } = this.props
    return this.props.workers.map((worker, index) => {
      const isSelected = (worker.id == selectedWorker.id)
      return (
        <WorkerListItem isSelected={isSelected} key={index} worker={worker} selectWorker={this.props.selectWorker}/>
      )
    })
  }

  render() {
    return (
      <ul className="workers-list list-unstyled">
        {this.workersList()}
      </ul>
    );
  }
}


export default WorkersList;
