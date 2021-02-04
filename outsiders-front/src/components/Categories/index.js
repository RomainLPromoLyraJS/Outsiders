import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Sport from './Sport.js'

// ADD loadCat
const Categories = ({ category, loadCategoriesData, sportTitle, handleSearch }) => {
  useEffect(() => {
    loadCategoriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styleMaker = (category) => {
    return `cat ${category}Cat`;
  }

  return (
    <main className={styleMaker(category.title)}>
      <h1 className='cat__title' >{category.title}</h1>
      <div className="cat__sportContainer">
        {category.sport.map((sport) => {
          return <NavLink key={sport.id} to='/sorties' onClick={handleSearch} >
          <div onClick={() => {sportTitle(sport.title)} }><Sport sport={sport}  /></div>
        </NavLink>
        })}
      </div>
    </main>
  );
};


export default Categories;