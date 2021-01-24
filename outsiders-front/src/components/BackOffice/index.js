// == Package imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Local imports



const BackOffice = () => (
  <>
  <div className="back-office">
    <nav className="back-office-nav">
      <h1 className='back-office__title'>Tableau de bord</h1>
      <ul>
        <NavLink to='/dashboard'>
      <li className='back-office__link'>Home</li>
      </NavLink>
      <NavLink to='/dashboard/profiles'>
      <li className='back-office__link'>Profils</li>
      </NavLink>
      <NavLink to='/dashboard/sports'>
      <li className='back-office__link'>Sports</li>
      </NavLink>
      <NavLink to='/dashboard/trips'>
      <li className='back-office__link'>Sorties</li>
      </NavLink>
      </ul>
    </nav>
     </div>
  
  

  </>
  
);

export default BackOffice;