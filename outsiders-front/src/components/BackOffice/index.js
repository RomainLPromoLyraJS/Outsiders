// == Package imports
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// == Local imports
import DashboardNav from './DashboardNav';
import DashBoardProfiles from './DashboardProfiles';
import DashBoardSports from '../../containers/DashboardSports';
import DashboardTrips from '../BackOffice/DashboardTrips';
import DashboardProfiles from '../../containers/DashboardProfiles';


const BackOffice = () => {


return (
  <>
  <div className="back-office">
    <DashboardNav />
    <DashBoardSports />
    <DashboardProfiles />
    <Route exact path='/dashboard/profiles' >
        <DashBoardProfiles />
      </Route>
      <Route exact path='/dashboard/sports' >
        <DashBoardSports />
      </Route>
  </div>
  
  

  </>
  
)
};


      // <Route exact path='/dashboard/trips' >
      //   <DashboardTrips />
      // </Route>

export default BackOffice;

