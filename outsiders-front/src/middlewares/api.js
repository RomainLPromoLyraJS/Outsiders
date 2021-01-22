// Package imports
import axios from 'axios';

// Local imports
import { getSportsSuccess } from '../store/action';

const auth = (store) => (next) => (action) => {
	switch (action.type) {

		case 'GET_SPORTS': {
			axios.get('http://ec2-174-129-120-118.compute-1.amazonaws.com:3000/sport')
				.then((response) => {
					store.dispatch(getSportsSuccess(response.data.data));
				})
			break;
		}

		default:
			next(action);
	}
};

export default auth;