import React from 'react';
class WorkerDetailsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { worker } = this.props
    return (
      <div className="worker-details-header tile row">
        <div className="col-md-6">
          <div className="worker-details-component">
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
              <div className="asset-details">
                <div>
                  <span className="label">Asset ID</span>
                  <span className="value">{worker.asset_id}</span>
                </div>
                <div>
                  <span className="label">Tag ID</span>
                  <span className="value">{worker.tag_id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 offset-md-2">
          <div className="worker-details-component">
            <div className="worker-details">
              <div className="main-details">
                <div className="name">
                  {worker.supervisor.name}
                </div>
                <div className="designation">
                  {worker.supervisor.designation}
                </div>
              </div>
            </div>
            <div className="avatar-wrapper">
              <img src="https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerDetailsHeader;
