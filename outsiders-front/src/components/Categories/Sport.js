import React from 'react';
import PropTypes from 'prop-types';


const Sport = ({ sport }) => {
  return (
    <div  className='sport_card'>
      <h1>{sport.title}</h1>
      <div>{sport.description}</div>
    </div> 
  )
}

Sport.propTypes = {
  sport: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}

export default Sport;