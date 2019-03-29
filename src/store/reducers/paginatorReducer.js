import _ from 'lodash';
import { SET_PAGE, GET_ITEMS } from '../actions/types';

const initialPagination = { orderBy: 'title', order: 'asc' };

export const paginationReducer = (page = initialPagination, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...action.payload.page };
        case SET_PAGE:
            return {
                ...action.payload,
            };
        default:
            return page;
    }
};
