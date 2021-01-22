//import local fake trips datas
import tripData from '../data/data-trips';

const initialState = {
    list: tripData,
};

const reducer = (oldState = initialState, action = {}) => {
    switch (action.type) {
        default:
            return {
                ...oldState,
            };
    };
};

export default reducer;