import axios from 'axios';

const api = (store) => (next) => (action) => {
    switch (action.type) {
        case 'LOGIN': {

            const { auth: { email, password } } = store.getState();

            const config = {
                method: 'post',
                url: 'http://localhost:3001/login',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    email,
                    password,
                },
            };

            axios(config)
							.then((response) => {
								store.dispatch({
									type: 'LOGIN_SUCCESS',
									...response.data,
								});
							})
							.catch((error) => {
								console.log(error);
							});
							break;
				}
				default:
					next(action);
    }
};

export default api;