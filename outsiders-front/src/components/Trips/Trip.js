// == Package imports == \\
import React from 'react';


const Trip = ({ trip }) => {
  return (
    <div className='trips_card'>
      <div className='sport'>{trip.title}</div>
      <div className='date'>{trip.date}</div>
      <div className='durantion'>{trip.duration}</div>
      <div className='peoples'>{trip.place}</div>
      <div className='destination'>{trip.to}</div>
      <div className='departure'>{trip.from}</div>
      <div className='price'>{trip.price}</div>
      <div className='profil'>{trip.user.username}</div>
    </div>
  )
}


export default Trip;