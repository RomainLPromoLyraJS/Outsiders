// == Package imports
import React from 'react';
import { HiOutlineAdjustments } from "react-icons/hi";

// == Local Imports
import SearchBar from '../../containers/SearchBar';

const Sorties = () => {
  return (
    <div className="sorties">
      <h1 className="sorties__title">Sorties</h1>
      <div className="sorties__container">
        <div className="sorties__container__search">
          <button><HiOutlineAdjustments /> Filtrer</button>
          <div className="search-pop">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorties;