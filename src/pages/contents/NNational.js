import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import * as DashBoardAction from '../../actions/DashboardAction';
import DashBoardStore from '../../stores/DashBoardStore';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class National extends Component {

    constructor(props){
        super(props);

        this.state = {
            counts : 0
        }

        this.loadChart = this.loadChart.bind(this);
    }

  componentWillMount(){
    DashBoardAction.loadTotalNational(DashBoardStore.getToken());
    DashBoardStore.on('dash_n_national', this.loadChart);
  }

  componentWillUnMount(){
    DashBoardStore.removeListener('dash_n_national', this.loadChart);
  }

  loadChart(){
    const PIEData = DashBoardStore.getNationalDataPIE();
    const barCategories = DashBoardStore.getNationalDataBarCategories();
    const barSeries = DashBoardStore.getNationalDataBarSeries();

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
            text: 'National Performance'
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
            text: 'National Results'
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
        <div className="col-md-12">
            <div className="vertical-spacer"></div>
            <div className="col-md-12">
                {this.renderPieChart(this.pieData)}
            </div>

            <div className="vertical-spacer"></div>
          
            <div className="col-md-12">
                {this.renderBarChart(this.barCategories, this.barData)}
            </div>
        </div> 
    );
  }
}

export default National;