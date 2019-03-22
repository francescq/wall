import _ from 'lodash';
import { GET_ITEMS } from '../actions/types';

export const paginationReducer = (
    state = { page: { orderBy: 'title', order: 'asc' } },
    action
) => {
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
