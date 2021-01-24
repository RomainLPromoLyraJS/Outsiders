// == Package imports
import React from 'react';

// == Local imports
import DashboardNav from '../DashboardNav';


const DashboardSports = () => (
  <>
  <div className="dashboard">
    <DashboardNav />
    
  <div className="dashboard-sports">
  <form>
      <div className='dashboard-sports__form'>
      <h3>Créer un sport</h3>
      <label forhtml='Nom du sport'></label>
      <input type='text' className='dashboard-sports__form__input'></input>
      <button type="submit" className='dashboard-sports__form__button'>Valider</button>
      </div>
      <div className='dashboard-sports__form'>
      <h3>Modifier un sport</h3>
      <label forhtml='Sélectionner le sport à modifier dans la liste :'></label>
      <select name='sport' className='dashboard-sports__form__select'>
      <option value=''>Sports</option>
      <option value=''>Surf</option>
      <option value=''>Paddle</option>
      </select>
      <button type="submit" className='dashboard-sports__form__button'>Valider</button>
      </div>
      <div className='dashboard-sports__form'>
      <h3>Supprimer un sport</h3>
      <select name='sport' className='dashboard-sports__form__select'>
      <option value=''>Sports</option>
      <option value=''>Surf</option>
      <option value=''>Paddle</option>
      </select>
      <label forhtml='Sélectionner le sport à supprimer dans la liste :'></label>
      <button type="submit" className='dashboard-sports__form__button'>Valider</button>
      </div>
      </form>
     </div>
     </div>
  

  </>
  
);

export default DashboardSports;