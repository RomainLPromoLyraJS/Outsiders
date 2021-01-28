import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Sport from './Sport.js'

// ADD loadCat
const Categories = ({ category, loadCategoriesData, sportTitle, handleSearch }) => {

  useEffect(() => {
    loadCategoriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  
  return (
    <>
    <div className='category_container'>
      <h1  name='try' >{category.title}</h1>
      {console.log(category)}
      {category.sport.map((sport) => {
        return <NavLink key={sport.id} to='/sorties' onClick={handleSearch} >
        <div onClick={() => {sportTitle(sport.title)}}><Sport  key={sport.id} sport={sport}  /></div>
      </NavLink>
      })}
    </div>
   </>
  )
};


export default Categories;