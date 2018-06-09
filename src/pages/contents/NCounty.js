import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Select from 'react-select';
import DashBoardStore from '../../stores/DashBoardStore';
import * as DashBoardAction from '../../actions/DashboardAction';

import 'react-select/dist/react-select.css';
import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class County extends Component {

    constructor(props){
        super(props);
        this.countys = [];
        this.loadCountys = this.loadCountys.bind(this);
        this.loadChart = this.loadChart.bind(this);

        this.state = {
            value : '',
            multi : false,
            isCountysLoaded : false,
            counts : 0
        }
    }
 
  componentWillMount(){
     DashBoardAction.loadCountys(this.props.token);
     DashBoardStore.on('dashboard_countys_loaded', this.loadCountys);
     DashBoardStore.on('dash_n_county', this.loadChart);
  }

  componentWillUnMount(){
    DashBoardStore.removeListener('dashboard_countys_loaded', this.loadCountys);
    DashBoardStore.removeListener('dash_n_county', this.loadChart);
  }

  loadCountys(){
    this.setState({
        isCountysLoaded : true
    })
  }

  loadChart(){
      const PIEData = DashBoardStore.getCountyDataPIE();
      const barCategories = DashBoardStore.getCountyDataBarCategories();
      const barSeries = DashBoardStore.getCountyDataBarSeries();

      this.pieData = PIEData;
      this.barCategories = barCategories;
      this.barData = barSeries;

      this.setState({
          counts : this.state.counts + 1
      })
  }

  onCountyChange(evt){
    this.setState({
        value : evt
    })

    DashBoardAction.loadCountyData(DashBoardStore.getToken(), evt.value);
    DashBoardStore.setCountyId(evt.value);
  }

  getOptions(input, callback) {
    const countys = DashBoardStore.getCountys();
    callback(null, {options: countys,complete: true});
  }

  renderBarChart(categories, data) {
        var opts = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'County Performance'
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
            text: 'County Results'
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

  render() {
      
    return (
        <div className="row">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <Select.Async multi={this.state.multi} placeholder="Select A County" value={this.state.value} onChange={this.onCountyChange.bind(this)} valueKey="value" labelKey="label" loadOptions={this.getOptions} />
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

export default County;
