import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import CBasic from './CBasic';
import CComplex from './CComplex';
import CTable from './CTable';
import Select from 'react-select';

import CountyStore from '../../stores/CountyStore';
import * as CountyAction from '../../actions/CountyAction';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class County extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : CountyStore.getCountyName(),
            multi : false,
            count : 0
        }

        this.reload = this.reload.bind(this);
        this.doPageInit = this.doPageInit.bind(this);
    }

    componentWillMount(){
     this.autoLoader();
        
     CountyAction.loadCountys(CountyStore.getToken());
     CountyStore.on('county_countys_loaded', this.reload);
     CountyStore.on('county_total_district', this.reload);
     CountyStore.on('county_total_declared_districts', this.reload);
     CountyStore.on('county_total_county_votes', this.reload);
     CountyStore.on('county_total_actual_county_votes', this.reload);
     CountyStore.on('county_c_county', this.reload);
     CountyStore.on('county_group', this.reload);
     CountyStore.on('county_total_rejected', this.reload);
    }

    componentWillUnMount(){
      CountyStore.removeListener('county_countys_loaded', this.reload);
      CountyStore.removeListener('county_total_district', this.reload);
      CountyStore.removeListener('county_total_declared_districts', this.reload);
      CountyStore.removeListener('county_total_county_votes', this.reload);
      CountyStore.removeListener('county_total_actual_county_votes', this.reload);
      CountyStore.removeListener('county_c_county', this.reload); 
      CountyStore.removeListener('county_group', this.reload);
      CountyStore.removeListener('county_total_rejected', this.reload);      
    }

    reload(){
        this.setState({
            count : this.state.count + 1
        })
    }

    doPageInit(val){
        CountyStore.setCountyId(val);        
        CountyAction.loadTotalDistrictsInCounty(CountyStore.getToken(), val);
        CountyAction.loadTotalDistrictsDeclaredInCounty(CountyStore.getToken(), val);
        CountyAction.loadTotalExpectedVotesInCounty(CountyStore.getToken(), val);
        CountyAction.loadTotalActualVotesInCounty(CountyStore.getToken(), val);
        CountyAction.loadCountyData(CountyStore.getToken(), val);
        CountyAction.loadCountyGroupData(CountyStore.getToken(), val);
        CountyAction.loadCountyRejected(CountyStore.getToken(), val);
    }

    onCountyChange(evt){
      if(this.timer){
          this.timer.cancel();
      }

      this.setState({
          value : evt
      })
      console.log('County Value => '+evt.value)
      this.doPageInit(evt.value);      
    }

    autoLoader(){
        //setTimeout(()=>{
            this.doPageInit(CountyStore.getCountyId());
        //}, 15*60*1000);
    }

    getOptions(input, callback) {
        const countys = CountyStore.getCountys();
        callback(null, {options: countys, complete: true});
    }

    getTotalDistricts(){
        return CountyStore.getTotalDistricts();
    }
    getTotalDeclaredDistricts(){
        return CountyStore.getTotalDeclaredDistricts();
    }

    getTotalExpectedVotesInCounty(){
        return CountyStore.getTotalCountyVotes();
    }

    getTotalActualVotesInCounty(){
        return CountyStore.getTotalActualCountyVotes();
    }

    getBarData(){
        const barData = {series : CountyStore.getCountyDataBarSeries(), categories : CountyStore.getCountyDataBarCategories()};
        return barData;
    }

    getPieData(){
        
        return CountyStore.getCountyDataPIE();
    }

    getGroupSeries(){
        return CountyStore.getCountyGroupSeries();
    }

    getGroupCategories(){
        return CountyStore.getCountyGroupCategories();
    }

    getTotalRejected(){
        return CountyStore.getCountyTotalRejected();
    }

    getTableHeader(){
        return CountyStore.getCountyTableHeader();
    }

    getTableBody(){
        return CountyStore.getCountyTableBody();
    }

  render() {
    const token = CountyStore.getToken();
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <Select.Async multi={false} placeholder="Pick A County" value={this.state.value} onChange={this.onCountyChange.bind(this)} valueKey="value" labelKey="label" loadOptions={this.getOptions} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="a-tile">
                        <div className="caption">
                            {this.getTotalDeclaredDistricts()}/{this.getTotalDistricts()}
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                            declared polling places
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="b-tile">
                        <div className="caption">
                            {this.getTotalActualVotesInCounty()}/{this.getTotalExpectedVotesInCounty()}
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
                    <CBasic barData={this.getBarData()} pieData={this.getPieData()} title={'County'}/>
                </div>
                <div className="vertical-spacer"></div>
                <div className="col-md-12">
                    <CComplex series={this.getGroupSeries()} categories={this.getGroupCategories()}/>
                </div>
                <div className="vertical-spacer"></div>
                <div className="col-md-12">
                    <CTable headers={this.getTableHeader()} body={this.getTableBody()}/>
                </div>
            </div>
                
        </div>
    );
  }
}

export default County;