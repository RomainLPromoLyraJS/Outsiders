// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports



const DashboardNav = () => (
  <>
  <div className="dashboard-nav">
    <nav className="dashboard-nav-main">
      <h1 className='dashboard-nav__title'>Tableau de bord</h1>
      <ul>
        <NavLink to='/dashboard'>
      <li className='dashboard-nav__link'>Home</li>
      </NavLink>
      <NavLink to='/dashboard/profiles'>
      <li className='dashboard-nav__link'>Profils</li>
      </NavLink>
      <NavLink to='/dashboard/sports'>
      <li className='dashboard-nav__link'>Sports</li>
      </NavLink>
      <NavLink to='/dashboard/trips'>
      <li className='dashboard-nav__link'>Sorties</li>
      </NavLink>
      </ul>
    </nav>
     </div>
  
  

  </>
  
);

export default DashboardNav;