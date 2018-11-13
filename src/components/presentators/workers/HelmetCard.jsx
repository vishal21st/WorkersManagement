import React from 'react';

class HelmetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { helmet } = this.props
    
    return (
      <div className="col-md-3">
        <div className="helmet-card">
          <span className={`status-indicator ${helmet.indicator}`}></span>
          <div className="detail">
            <div className="detail-icon">
              <i className="fas fa-toolbox"></i>
            </div>
            <div className="detail-value">
              {helmet.id}
            </div>
          </div>
          <div className="detail">
            <div className="detail-icon">
              <i className="fas fa-id-card"></i>
            </div>
            <div className="detail-value">
              {helmet.assigned_id}
            </div>
          </div>
          <div className="detail">
            <div className="detail-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="detail-value">
              {helmet.time}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelmetCard;
