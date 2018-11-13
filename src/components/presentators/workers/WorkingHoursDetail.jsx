import React from 'react';
import ReactHighcharts from 'react-highcharts';
class WorkingHoursDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    let chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 10, y: 12});
  }

  render() {
    const { worker } = this.props
    const config = {
      chart: {
        type: "column",
        height: 200
      },
      title: {
        text: ""
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
          data: worker.monthlyHours,
          name: "Month"
      }]
    }
    return (
      <div className="working-hours-details tile row">
        <div className="col-md-4">
          <ul className="details list-unstyled">
            <li className="detail">
              <div className="detail-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="detail-meta">
                <div className="detail-label">
                  Total Hours worked
                </div>
                <div className="detail-value">
                  {worker.hours_worked}
                </div>
              </div>
            </li>
            <li className="detail">
              <div className="detail-icon">
                <i className="fas fa-map-marker"></i>
              </div>
              <div className="detail-meta">
                <div className="detail-label">
                  Last Active Zone
                </div>
                <div className="detail-value">
                  {worker.last_active_zone}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
        </div>
      </div>
    );
  }
}

export default WorkingHoursDetail;
