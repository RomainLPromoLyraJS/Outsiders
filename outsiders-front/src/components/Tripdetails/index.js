//Package Import
import React from 'react';

// Local Import

// We need to import {trip:id} 


const Tripdetails = () => {
  
  return (
    <div className='tripdetails'>
      <section className='trip_section_place'>
        <h1 className='trip_title'>title</h1>
        <div className='trip_date'>21/01</div>
        <div className='trip_departure'>Lyon</div>
        <div className='trip_traveltime'> 03:00</div>
        <div className='trip_destination'>Montpellier</div>
      </section>
      <section className='trip_section_activity'>
        <div className='trip_logo_activity'>img</div>
        <div className='trip_logo_time'>img</div>
        <div className='trip_duration'>1/2DAY</div>
      </section>
      <section className='trip_section_price'>
        <div className='trip_total_price'>100</div>
        <div className='trip_price_person'>50</div>
      </section>
      <section className='trip_section_creator'>
        <div className='trip_profil'>PROFIL</div>
        <div className='trip_description'>description lorem bla bla spaurt</div> 
      </section>
      <section className='trip_section_participants'>
        <div className='trip_p'>PROFIL</div>
        <div className='trip_participants_logo'>img</div>
        <div className='trip_participants_title'>Participants</div>
        <div className='trip_participants_number'>2/4</div>
        <div className='trip_participants_profil'>img + name</div>
        <div className='trip_participants_profil'>img + name</div>
      </section>
      
      <button className='trip_button_inscription'>J'y participe</button>

    </div>
  )
};

export default Tripdetails;