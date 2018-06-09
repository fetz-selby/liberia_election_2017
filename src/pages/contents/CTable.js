import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import * as DashBoardAction from '../../actions/DashboardAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class CTable extends Component {

    constructor(props){
        super(props);
    }

  componentWillMount(){
  }

  render() {
    const headers = this.props.headers.map((head)=>{return <th>{head}</th>});
    const body = this.props.body.map((row)=>{
        return <tr>
            <td>{row.name}</td>
            <td>{row.votes}</td>
        </tr>
        });        

    return (
        <div className="col-md-12">
            <div className="heading">Results</div>
            <table className="table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div> 
    );
  }
}

export default CTable;