import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import * as DashBoardAction from '../../actions/DashboardAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class CBasic extends Component {

    constructor(props){
        super(props);
    }

  componentWillMount(){
    console.log('Token ::: '+this.props.token);
  }

  renderBarChart(categories, data, title) {
    var opts = {
        chart: {
            type: 'bar'
        },
        title: {
            text: title+' Performance'
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

renderPieChart(data, title) {
    var opts = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: title+' Results'
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
            <div className="col-md-6">
                {this.renderBarChart(this.props.barData.categories, this.props.barData.series, this.props.title)}
            </div>
          
            <div className="col-md-6">
                {this.renderPieChart(this.props.pieData, this.props.title)}
            </div>
        </div> 
    );
  }
}

export default CBasic;