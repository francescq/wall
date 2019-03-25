import { SET_TERM } from '../actions/types';

export const termReducer = (term = '', action) => {
    switch (action.type) {
        case SET_TERM:
            return action.payload;
        default:
            return term;
    }
};
