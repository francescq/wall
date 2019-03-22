import { GET_FAVOURITES, ADD_FAVOURITE, REM_FAVOURITE } from '../actions/types';

export const favouritesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FAVOURITES:
            // return {
            //     ..._.mapKeys(action.payload, 'id'),
            // };
            return {};
        case ADD_FAVOURITE:
            // return Object.assign({}, state, action.payload);
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id'),
            };
        case REM_FAVOURITE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};
