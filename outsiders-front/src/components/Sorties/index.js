// == Package imports
import React, { useState } from 'react';
import { HiOutlineAdjustments } from "react-icons/hi";

// == Local Imports
import SearchBar from '../../containers/SearchBar';
import Trips from '../../containers/Trips'

const Sorties = () => {
  const [ openSearch, setOpenSearch ] = useState(false);

  const toggleSearchBar = () => {
    setOpenSearch(!openSearch);
  }

  const searchStyle = openSearch
    ? 'search-pop--open'
    : 'search-pop'

  return (
    <div className="sorties">
      <h1 className="sorties__title">Sorties</h1>
      <div className="sorties__container">
        <div className="sorties__container__search">
          <button className="sorties__container__search__toggle" onClick={toggleSearchBar}><HiOutlineAdjustments /> Filtrer</button>
          <div className={searchStyle}>
            <SearchBar />
          </div>
        </div>
        <div className="sorties__container__results">
          <Trips />
        </div>
      </div>
    </div>
  );
};

export default Sorties;