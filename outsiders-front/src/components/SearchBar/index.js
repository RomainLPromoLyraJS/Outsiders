// == Package imports
import React from 'react';

// == Local imports
import sportsData from '../../data/sports';

const SearchBar = ({ sports = sportsData }) => (
  <div className="searchBar">
    <form className="form">
      <select name="sport" className="form__sport">
        <option value="">Sport</option>
        {sports.map(s => {
          return <option key={s.id} value={s.title}>{s.title}</option>
        })}
      </select>
      <input name="from" className="form__from" type="text" placeholder="Départ" />
      <input name="date" className="form__date" type="date" />
      <button className="form__button" type="submit">Rechercher</button>
    </form>
  </div>
);

export default SearchBar;