import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
      {category.sport.map((sport) => {
        return <NavLink key={sport.id} to='/sorties' onClick={handleSearch} >
        <div onClick={() => {sportTitle(sport.title)}}><Sport  key={sport.id} sport={sport}  /></div>
      </NavLink>
      })}
    </div>
   </>
  )
};

Categories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sport: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  loadCategoriesData: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  sportTitle: PropTypes.func.isRequired,
}
export default Categories;