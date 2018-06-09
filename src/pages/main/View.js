import React, { Component } from 'react';
import Dashboard from '../contents/Dashboard';
import County from '../contents/County';
import Center from '../contents/Center';

import ViewHeader from './ViewHeader';

import {Route, Switch } from 'react-router-dom';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class View extends Component {

    constructor(props){
        super(props);
        this.state = {
            fullScreen : false
        }

        this.hideSideNav = this.hideSideNav.bind(this);
    }

  componentWillMount(){
      this.setState({
          fullScreen : false
      })
  }

  hideSideNav(){
      this.setState({
          fullScreen : true
      })
  }

  render() {
    return (
       <div className="container view-main">
           <ViewHeader></ViewHeader>
           <div className="row">  
               
               <div className="col-xs-12 col-md-12 content">
                    <Switch>
                        <Route exact path='/app/dashboard' component={Dashboard}/>
                        <Route exact path='/app/county' component={County}/>
                        <Route exact path='/app/center' component={Center}/>
                    </Switch>
               </div>
           </div>
       </div>
    );
  }
}



export default View;
