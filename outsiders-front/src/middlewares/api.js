// import axios from 'axios';

const auth = (store) => (next) => (action) => {
	switch (action.type) {

		default:
			next(action);
	}
};

export default auth;