import React from 'react';
import Avatar from 'avataaars'

class WorkersListItem extends React.Component {
  
  render() {
    const { worker } = this.props
    return (
      <li className={`worker-list-item ${this.props.isSelected ? "selected" : ""}`}
          onClick={() => this.props.selectWorker(worker)}>
        <div className="avatar-wrapper">
          <img src="https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png"/>
        </div>
        <div className="worker-details">
          <div className="main-details">
            <div className="name">
              {worker.name}
            </div>
            <div className="designation">
              {worker.designation}
            </div>
          </div>
          <div className="id-number">
            {worker.id}
          </div>
        </div>
      </li>
    );
  }
}


export default WorkersListItem;
