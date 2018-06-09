import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import * as DashBoardAction from '../../actions/DashboardAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

class CenterTable extends Component {

    constructor(props){
        super(props);
    }

  componentWillMount(){
  }

  getBootstrapStyling(content, size, i){
      return <div className={'col-md-'+size} key={i}>{content}</div>
  }

  getCustomStyling(content, size, i){
    return <div className="center-custom-styling" key={i}>{content}</div>
  }

  getHeaderConstruction(){
    const division = 12 / (this.props.headers.length);
        return this.props.headers.length > 4 ? 
        (<div className="row center-table-heading">
            {this.props.headers.map((header, i)=>{
                return (this.getCustomStyling(header, division, i))
            })}

      </div>)
         : <div className="row center-table-heading">
                    {this.props.headers.map((header, i)=>{
                        return (this.getBootstrapStyling(header, division, i))
                    })}

              </div>
  }

  getBodyConstruction(){
    return this.props.body.map((row)=>{
        const division = 12 / (row.length);
        return row.length > 4 ?
            (<div className="row center-table-row">
                {row.map((header, i)=>{
                    return (this.getCustomStyling(header, division, i))
                })}
            </div>)
        : <div className="row center-table-row">
                    {row.map((header, i)=>{
                        return (this.getBootstrapStyling(header, division, i))
                    })}

            </div>
    })
   
  }

  render() {      

    return (
        <div className="col-md-12">
            <div className="heading">Tabular Figures</div>
                {this.getHeaderConstruction()} 
                {this.getBodyConstruction()} 
            </div> 
    );
  }
}

export default CenterTable;