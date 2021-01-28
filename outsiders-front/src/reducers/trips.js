import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
} from '../store/action';

const initialState = {
  list: [],
  isLoaded: false,
  currentTrip: {
    id: '5',
    title: 'Raft en Isère',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Enim lobortis scelerisque fermentum dui.',
    date: '2021-01-27T00:00:00.000Z',
    time: '09:00:00+00',
    from: 'Lyon',
    to: 'Grenoble',
    places: 4,
    minimum: 2,
    price: 100,
    duration: 0.5,
    sport: {
      id: 7,
      title: "Rafting",
      description: "Le rafting (de l'anglais to raft « traverser, descendre (un fleuve) en radeau »), ou le raft (abréviation familière), est une activité de loisir ou un sport qui consiste à descendre des sections de rivière à rapides dans un radeau pneumatique."
    },
    creator: {
      id: 42,
      username: "Nitro Circus",
      email: "travis@pastrana.com",
      description: "Moi j'aime tout, du moment que je peux avoir la tête en bas et éventuellement me casser tous le corps. Yes !"
    },
    message: [],
    participants: [],
  },
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
      };

    case GET_TRIPS_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
      };

      case 'CHANGE_LOADING':
			  return {
				  ...oldState,
          isLoaded: false,
			}
    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;