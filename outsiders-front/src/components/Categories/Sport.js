import React from 'react';


const Sport = ({ sport }) => {
  return (
    <div  className='sport_card'>
      <h1>{sport.title}</h1>
      <div>{sport.description}</div>
    </div> 
  )
}

export default Sport;