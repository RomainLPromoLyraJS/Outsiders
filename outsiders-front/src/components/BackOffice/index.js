// == Package imports
import React from 'react';

// == Local imports
import DashboardNav from './DashboardNav';
import DashBoardProfiles from './DashboardProfiles';
import DashBoardSports from '../../containers/DashboardSports';
import DashboardTrips from '../BackOffice/DashboardTrips';


const BackOffice = () => (
  <>
  <div className="back-office">
    <DashboardNav />
    <DashBoardSports />
  </div>
  
  

  </>
  
);

export default BackOffice;

{/* <Route path='/dashboard/profiles' >
        <DashBoardProfiles />
      </Route>
      <Route exact path='/dashboard/sports' >
        <DashBoardSports />
      </Route>
      <Route exact path='/dashboard/trips' >
        <DashboardTrips />
      </Route> */}