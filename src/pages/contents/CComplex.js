import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import * as DashBoardAction from '../../actions/DashboardAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class CComplex extends Component {

    constructor(props){
        super(props);

        this.bar_config={
           
        }
    }

  componentWillMount(){
    console.log('Token ::: '+this.props.token);
    //DashBoardAction.loadCountys(this.props.token);
  }

  renderBarChart(categories, data) {
    var opts = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Summary Voting Centers'
        },
        subtitle: {
            text: 'Source: electiongods'
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Votes'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: data
    }

    return <ReactHighcharts config={opts} ref="chart"/>
}

  render() {
    return (
        <div className="col-md-12">          
            <div className="col-md-12">
                {this.renderBarChart(this.props.categories, this.props.series)}
            </div>
        </div> 
    );
  }
}

export default CComplex;