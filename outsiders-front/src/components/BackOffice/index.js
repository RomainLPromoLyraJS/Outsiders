// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
import DashboardNav from './DashboardNav';
import DashBoardProfiles from './DashboardProfiles';
import DashBoardSports from '../BackOffice/DashboardSports';
import DashboardTrips from '../BackOffice/DashboardTrips';


const BackOffice = () => (
  <>
  <div className="back-office">
    <DashboardNav />
    <DashBoardSports />
    {/* <Route path='/dashboard/profiles' >
        <DashBoardProfiles />
      </Route>
      <Route exact path='/dashboard/sports' >
        <DashBoardSports />
      </Route>
      <Route exact path='/dashboard/trips' >
        <DashboardTrips />
      </Route> */}
  </div>
  
  

  </>
  
);

export default BackOffice;