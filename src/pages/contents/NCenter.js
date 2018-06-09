import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Select from 'react-select';
import DashBoardStore from '../../stores/DashBoardStore'
import * as DashBoardAction from '../../actions/DashboardAction';

import 'react-select/dist/react-select.css';
import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class Center extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : '',
            multi : false,
            counts : 0
        }
        this.centers = [];
        this.loadChart = this.loadChart.bind(this);
    }

  componentWillMount(){
     //DashBoardAction.loadCenters(this.props.token);
     DashBoardStore.on('dashboard_county_change', this.loadCenters);
     DashBoardStore.on('dash_n_center', this.loadChart);     
  }

  componentWillUnMount(){
    DashBoardStore.removeListener('dashboard_county_change', this.loadCenters);
    DashBoardStore.removeListener('dash_n_center', this.loadChart);    
  }

  loadChart(){
    const PIEData = DashBoardStore.getCenterDataPIE();
    const barCategories = DashBoardStore.getCenterDataBarCategories();
    const barSeries = DashBoardStore.getCenterDataBarSeries();

    this.pieData = PIEData;
    this.barCategories = barCategories;
    this.barData = barSeries;

    this.setState({
        counts : this.state.counts + 1
    })
  }

  renderBarChart(categories, data) {
    var opts = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Voting Center Performance'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Votes'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'votes',
            data: data
        }]
    }

 return <ReactHighcharts config={opts} ref="chart"/>
}

renderPieChart(data) {
    var opts = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Voting Center Results'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (ReactHighcharts.theme && ReactHighcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'votes',
            colorByPoint: true,
            data: data
        }]
    }

 return <ReactHighcharts config={opts} ref="pie"/>
}

  getBarConfig(){
      return {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Center Performance'
        },
        xAxis: {
            categories: ['BRUMSKINE CHARLES', 'COOPER MACDELLA B.', 'COOPER OSCAR', 'BOAKAI JOSEPH NYUMA', 'DWEH GEORGE']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Votes'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'votes',
            data: [5011, 3010, 4010, 7003, 2900]
        }]
    }
  }

  loadCenters(){
    DashBoardAction.loadCenter(DashBoardStore.getToken(), DashBoardStore.getCountyId());
  }

  onCenterChange(evt){
    this.setState({
        value : evt
    })

    DashBoardAction.loadCenterData(DashBoardStore.getToken(), evt.value);
  }

  getOptions(input, callback) {
    const centers = DashBoardStore.getCenters();
    callback(null, {options: centers, complete: true});
  }

  render() {
    return (
        <div className="row">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <Select.Async multi={false} placeholder="Select A Center" value={this.state.value} onChange={this.onCenterChange.bind(this)} valueKey="value" labelKey="label" loadOptions={this.getOptions} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    {this.renderPieChart(this.pieData)}
                </div>
            
                <div className="col-md-6">
                    {this.renderBarChart(this.barCategories, this.barData)}
                </div>
            </div> 
        </div>
    );
  }
}

export default Center;
