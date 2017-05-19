// This component handles the App template used on every page.
import React, {PropTypes} from 'react';

import {connect} from 'react-redux';

import PersonalInformation from './pages/PersonalInformation';
import Address from './pages/Address'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    debugger;
    switch (this.props.pageNumber) {
      case 1:
        return (<div className="container-fluid"><PersonalInformation/></div>);
      case 2:
        return <Address></Address>;

      default:

    }
      }
}




function mapStateToProps(state, ownProps) {
  return {
    pageNumber: state.pageNumber
  };
}



export default connect(mapStateToProps)(App);
