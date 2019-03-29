import _ from 'lodash';
import { GET_ITEMS } from '../actions/types';

const initialPagination = { page: { orderBy: 'title', order: 'asc' } };

export const paginationReducer = (state = initialPagination, action) => {
    switch (action.type) {
        case GET_ITEMS:
            //console.log(action.payload);
            return {
                ...state,
                page: action.payload.page,
            };
        default:
            return state;
    }
};
