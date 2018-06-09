import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import tiny_thumb from '../../icons/fingerprint.svg';
import {Link} from 'react-router-dom';

import '../../bower_components/bootstrap/dist/css/bootstrap.css';
import '../../styles/font-awesome/css/font-awesome.css';
import '../../styles/custom.css';

//import _ from 'lodash';

class ViewHeader extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  onOpen(evt){
    this.props.show();
  }

  render() {
    return (
      <div className="view-header">
        <div className="header-user">
          {this.props.user}
        </div>
        <ReactSVG path={tiny_thumb} callback={svg => {}} className="svg-style"/>
        <div className="pull-right">
          <div className="app-title">Liberia Election 2017</div>
          <div><span className="poweredby">powered by </span><span className="poweredby-value-a">e</span><span className="poweredby-value-b">Gods</span></div>
        </div>
        <ul>
            <li>
              <Link to="/app/dashboard">
                  National
              </Link>
            </li>
            <li>
              <Link to="/app/county">
                  County
              </Link>
            </li>
            <li>
              <Link to="/app/center">
                  Voting Precinct
              </Link>
            </li>
        </ul>
      </div>
    );
  }
}

export default ViewHeader;