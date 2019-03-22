import { SET_TERM } from '../actions/types';

export const termReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TERM:
            return {
                ...state,
                term: action.payload,
            };
        default:
            return state;
    }
};
