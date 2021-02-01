// == NAMED AS 'exapi' for EXTERNAL API == \\
// Package imports
import axios from 'axios';

// local imports
// import apiUrl from './url';
import { loadWeatherSuccess } from '../store/action';


/**
 * TODO:
 * 
 * @PARAMS ${weatherKey} => API KEY see doc for more informations
 * @LINK https://openweathermap.org/forecast5
 * @TODO EXPORT WEATHERKEY
 * 
 * @params ${from} => replace by ${currentTrip.from} when trip is select
 * 
 * 
 *  */  

const weatherKey = '5102a539085037168997fc53c5a4d62b';

//request cat/etc
const exapi = (store) => (next) => (action) => {

  switch (action.type) {

    case 'LOAD_WEATHER': {
    //  const { trips: { currentTrip: { from }}} = store.getState();
    const { exapi: { from } } = store.getState();

     const config = {
       method: 'get',
       url: `https://api.openweathermap.org/data/2.5/forecast?q=${from}&units=metric&APPID=${weatherKey}`,
       headers: {
         'Content-Type': 'application/json',
       },
     };
     axios(config)
     .then((response) => {
       if (response.status !== 200) {
         throw response.error;
       } else {
         console.log(response.data)
         store.dispatch(loadWeatherSuccess(response.data));
         //setData into exapi Reducers (follow actions)
       }
     }).catch((error) => {
       console.log('Oups !', error);
     });
     break;
    };
    default:
      next(action);
  };
};

export default exapi;