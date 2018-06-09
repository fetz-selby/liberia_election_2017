import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import DashBoardStore from '../../stores/DashBoardStore';
import * as DashBoardAction from '../../actions/DashboardAction';

import Center from './NCenter';
import County from './NCounty';
import National from './NNational';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {counts : 0};
        this.timer = null;
        this.switchTimer = null;

        this.autoLoader = this.autoLoader.bind(this);
        this.refresh = this.refresh.bind(this);
        this.position = 0;
    }

  componentWillMount(){    
     console.log('MOUNTING ...');
     this.autoLoader();            
     DashBoardStore.on('dash_total_declared', this.refresh);
     DashBoardStore.on('dash_total_district', this.refresh);
     DashBoardStore.on('dash_total_votes', this.refresh);
  }

  componentWillUnMount(){
    // if(this.timer){
    //     clearInterval(this.timer);
    //     this.timer = null;
    // }

    console.log('UNMOUNTING ...');
    DashBoardStore.removeListener('dash_total_declared', this.refresh);
    DashBoardStore.removeListener('dash_total_district', this.refresh);
    DashBoardStore.removeListener('dash_total_votes', this.refresh);
  }

  autoLoader(){
    //   if(this.timer){
    //     clearInterval(this.timer);
    //   }

    //   this.timer = setInterval(()=>{
        DashBoardAction.loadTotalDeclared(DashBoardStore.getToken());
        DashBoardAction.loadTotalDistricts(DashBoardStore.getToken());
        DashBoardAction.loadTotalVotes(DashBoardStore.getToken());
        DashBoardAction.loadTotalNational(DashBoardStore.getToken());
     // }, 1*10*1000);
  }

  refresh(){
      this.setState({
          counts : this.state.counts + 1
      })
  }

  getTotalVotes(){
    return DashBoardStore.getTotalVotes();
  }

  getTotalDistricts(){
      return DashBoardStore.getTotalDistrict();
  }

  getTotalDeclaredDistrict(){
      return DashBoardStore.getTotalDeclaredDistrict();
  }

  getNationalPercentage(){
      if(DashBoardStore.getNationalPercentage() && DashBoardStore.getNationalPercentage()[this.position]){
        return DashBoardStore.getNationalPercentage()[this.position].percentage
      }else{
          return '';
      }
  }

  getNationalPercentageName(){
    if(DashBoardStore.getNationalPercentage() && DashBoardStore.getNationalPercentage()[this.position]){
        return DashBoardStore.getNationalPercentage()[this.position].name;
      }else{
          return '';
      } 
  }

  render() {
    const token = DashBoardStore.getToken();
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="a-tile">
                        <div className="caption">
                            {this.getTotalDeclaredDistrict()}/{this.getTotalDistricts()}
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
                            {this.getTotalVotes()}
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                            total valid votes
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="c-tile">
                        <div className="caption">
                            {this.getNationalPercentage()}%
                        </div>
                        <div className="clearfix"></div>
                        <div className="subscript">
                            {this.getNationalPercentageName()}
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <National token={token}/>
                </div>

                <div className="col-md-6">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <County token={token}/>
                        </div>

                        <div className="vertical-spacer"></div>
                        <div className="vertical-spacer"></div>

                        <div className="col-md-12">
                            <Center token={token} countyId={5}/>
                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    );
  }
}

export default Dashboard;
