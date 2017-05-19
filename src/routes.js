import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PersonalInformation from './components/pages/PersonalInformation';
import Address from './components/pages/Address';
import EducationDetails from './components/pages/EducationDetails';
import Experience from './components/pages/Experience';
import Submission from './components/pages/Submission';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PersonalInformation}/>
    <Route path="address" component={Address}/>
    <Route path="edudetails" component={EducationDetails}/>
    <Route path="exp" component={Experience}/>
    <Route path="submit" component={Submission}/>
  </Route>
);
