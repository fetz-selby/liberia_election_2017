import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import CBasic from './CBasic';
import CComplex from './CComplex';
import CenterTable from './CenterTable';

import Select from 'react-select';

import CenterStore from '../../stores/CenterStore';
import CountyStore from '../../stores/CountyStore';
import * as CenterAction from '../../actions/CenterAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class County extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : '',
            multi : false,
            count : 0
        }
        this.timer = null;
        this.reload = this.reload.bind(this);
        this.doPageInit = this.doPageInit.bind(this);
    }

    componentWillMount(){
     CenterAction.loadCenters(CenterStore.getToken(), CountyStore.getCountyId());
     CenterStore.on('center_centers_loaded', this.reload);
     CenterStore.on('center_total_districts', this.reload);
     CenterStore.on('center_total_center_votes', this.reload);
     CenterStore.on('center_total_actual_center_votes', this.reload);
     CenterStore.on('center_total_rejected', this.reload);
     CenterStore.on('center_n_center', this.reload);
     CenterStore.on('center_t_center', this.reload);     
    }

    componentWillUnMount(){
    CenterStore.removeListener('center_centers_loaded', this.reload);
    CenterStore.removeListener('center_total_districts', this.reload);
    CenterStore.removeListener('center_total_center_votes', this.reload);
    CenterStore.removeListener('center_total_actual_center_votes', this.reload);
    CenterStore.removeListener('center_total_rejected', this.reload);
    CenterStore.removeListener('center_n_center', this.reload);  
    CenterStore.removeListener('center_t_center', this.reload);         
    }

    reload(){
        this.setState({
            count : this.state.count + 1
        })
    }

    doPageInit(val){
        console.log('VALUE => '+val);        

        //CountyStore.setCountyId(val);        
        CenterAction.loadTotalDistrictsInCenter(CenterStore.getToken(), val);
        CenterAction.loadTotalExpectedVotesInCenter(CenterStore.getToken(), val);
        CenterAction.loadTotalActualVotesInCenter(CenterStore.getToken(), val);
        CenterAction.loadCenterRejected(CenterStore.getToken(), val);
        CenterAction.loadCenterData(CenterStore.getToken(), val);
        CenterAction.loadDistrictData(CenterStore.getToken(), val);
    }

    onCenterChange(evt){
      if(this.timer){
          this.timer.cancel();
      }

      this.setState({
          value : evt
      })

      console.log('VALUE => '+evt.value);
      this.doPageInit(evt.value);

      const app = this;      
      //this.timer = setInterval(()=>{
          app.doPageInit(evt.value);
      //}, 5*60*1000);

    }

  getOptions(input, callback) {
    const centers = CenterStore.getCenters();
    callback(null, {options: centers, complete: true});
  }

  getTotalDistricts(){
      return CenterStore.getTotalDistricts();
  }
  getTotalExpectedVotes(){
      return CenterStore.getTotalExpectedCenterVotes();
  }

  getTotalActualVotes(){
      return CenterStore.getTotalActualCenterVotes();
  }

  getTotalRejected(){
      return CenterStore.getTotalRejectedVotes();
  }

  getBarData(){
        const barData = {series : CenterStore.getCenterDataBarSeries(), categories : CenterStore.getCenterDataBarCategories()};
        return barData;
  }

   getPieData(){ 
        return CenterStore.getCenterDataPIE();
   }

   getTableHeader(){
       console.log('Header ::: '+CenterStore.getCenterTableData().header);
       return CenterStore.getCenterTableData().header;
   }

   getTableBody(){
       console.log('Body ::: '+CenterStore.getCenterTableData().header);    
       return CenterStore.getCenterTableData().rows;
   }
 

  render() {
    const token = CenterStore.getToken();
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <Select.Async multi={false} placeholder="Pick A Center" value={this.state.value} onChange={this.onCenterChange.bind(this)} valueKey="value" labelKey="label" loadOptions={this.getOptions} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="a-tile">
                        <div className="caption">
                            {this.getTotalDistricts()}
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                             polling places
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="b-tile">
                        <div className="caption">
                            {this.getTotalActualVotes()}/{this.getTotalExpectedVotes()}
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                            total votes
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="c-tile">
                        <div className="caption">
                            {this.getTotalRejected()}
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                             total invalid votes
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <CBasic barData={this.getBarData()} pieData={this.getPieData()} title={'Center'}/>
                </div>
                <div className="vertical-spacer"></div>
                
                <div className="col-md-12">
                    <CenterTable headers={this.getTableHeader()} body={this.getTableBody()}/>
                </div>
            </div>
                
        </div>
    );
  }
}

export default County;