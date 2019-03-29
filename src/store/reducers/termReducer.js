import { SET_TERM } from '../actions/types';

const initialTerm = '';

export const termReducer = (term = initialTerm, action) => {
    switch (action.type) {
        case SET_TERM:
            return action.payload;
        default:
            return term;
    }
};
