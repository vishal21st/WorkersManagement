import React from 'react';
import InputField from '../form_components/InputField'
import WorkersList from './WorkersList'
class WorkersListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: "" };
  }

  workersList() {
    const { searchKey } = this.state
    return this.props.workers.workers.filter((worker) => {
      return worker.name.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0
    })
  }

  render() {
    const { workers } = this.props
    return (
      <div className="worker-list-box col-md-3">
      <InputField 
        inputType="text"
        name="search"
        placeholder="Search by name" 
        inputRef="search"
        onChange={(e) => {this.setState({searchKey: e.target.value})}}/>

        <WorkersList selectWorker={this.props.selectWorker} workers={this.workersList()} selectedWorker={this.props.selectedWorker}/>
      </div>
    );
  }
}


export default WorkersListBox;
