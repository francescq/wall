import _ from 'lodash';
import { GET_ITEMS } from '../actions/types';

export const paginationReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                page: action.payload.page,
            };
        default:
            return state;
    }
};
