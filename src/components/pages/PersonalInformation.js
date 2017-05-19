import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as pageNumberActions from '../../actions/pageNumberActions';
import * as userInfoActions from '../../actions/userInfoActions';

class PersonalInformation extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    var {firstName, lastName, fatherName, motherName, dob} = this.refs;
    var {pageNumber} = this.props    ;
    var userInfo = {};
    userInfo.personalInfo = {
      firstName : firstName.value,
      lastName :lastName.value,
      fatherName : fatherName.value,
      motherName : motherName.value,
      dob : dob.value
    };
    console.log('submitted');
    this.props.action2.addPersonalInfo(userInfo)
    this.props.action1.updatePageNumber(pageNumber);

  }

  render(){

    return(
      <div className = "jumbotron">
      <form className = "form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset disabled ="">
           <legend >Personal Information:</legend>
           <div className="form-group row ">
             <label  className ="col-sm-2 col-form-label">First Name </label>
             <div className="col-sm-10  ">
               <input type="text" className="form-control"  placeholder="First Name" ref="firstName" required  maxLength = "100"  />
             </div>
           </div>
           <div className="form-group row">
             <label  className ="col-sm-2 col-form-label">Last Name </label>
             <div className="col-sm-10">
               <input type="text" className="form-control"  placeholder="Last Name" ref="lastName" required  maxlength = "100" />
             </div>
           </div>
           <div className="form-group row">
             <label  className ="col-sm-2 col-form-label">Father's Name </label>
             <div className="col-sm-10">
               <input type="text" className="form-control"  placeholder="Father's Name" ref="fatherName" required maxlength = "100" />
             </div>
           </div>
           <div className="form-group row">
             <label  className ="col-sm-2 col-form-label">Mother's Name </label>
             <div className="col-sm-10">
               <input type="text" className="form-control"  placeholder="Mother's Name" ref="motherName" required maxlength = "100" />
             </div>
           </div>
           <div className="form-group row">
             <label  className ="col-sm-2 col-form-label">Date Of Birth </label>
             <div className="col-sm-10">
               <div className="input-group col-xs-3">
                 <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                 <input type="date" className="form-control " placeholder="MM/DD/YYY" max="2000-01-01" min = "1956-01-01" ref="dob" required/>
               </div>
             </div>
           </div>

        </fieldset>
          <button className="btn btn-primary btn-lg" type="submit ">Save</button>
      </form>
      </div>

  );
  }


}

function mapStateToProps(state, ownProps) {
  return {
    pageNumber: state.pageNumber,
    userInfo : state.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: bindActionCreators(pageNumberActions, dispatch),
    action2: bindActionCreators(userInfoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation);
