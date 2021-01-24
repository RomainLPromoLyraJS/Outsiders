// == Package imports
import React from 'react';

// == Local imports
import DashboardNav from '../DashboardNav';


const DashboardTrips = () => (
  
  <>
  <div className="dashboard">
  <DashboardNav />

  <div className="dashboard-trips">
  <form>
      <div className='dashboard-trips__form'>
      <h3>Créer une sortie</h3>
      <label forhtml='Nom du sortie'></label>
      <input type='text' className='dashboard-trips__form__input'></input>
      <button type="submit" className='dashboard-trips__form__button'>Valider</button>
      </div>
      <div className='dashboard-trips__form'>
      <h3>Modifier une sortie</h3>
      <label forhtml='Sélectionner le sortie à modifier dans la liste :'></label>
      <select name='trip' className='dashboard-trips__form__select'>
      <option value=''>Sorties</option>
      <option value=''>Sortie 1</option>
      <option value=''>Sortie 2</option>
      </select>
      <button type="submit" className='dashboard-trips__form__button'>Valider</button>
      </div>
      <div className='dashboard-trips__form'>
      <h3>Supprimer une sortie</h3>
      <select name='trip' className='dashboard-trips__form__select'>
      <option value=''>Sortie</option>
      <option value=''>Sortie 1</option>
      <option value=''>Sortie 2</option>
      </select>
      <label forhtml='Sélectionner le profil à supprimer dans la liste :'></label>
      <button type="submit" className='dashboard-trips__form__button'>Valider</button>
      </div>
      </form>
     </div>
     </div>
  
  

  </>
  
);

export default DashboardTrips;