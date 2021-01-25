// import axios from 'axios';

// request cat/etc
const auth = (store) => (next) => (action) => {
	switch (action.type) {

		default:
			next(action);
	}
};

export default auth;