import _ from 'lodash';
import { GET_ITEMS } from '../actions/types';

export const itemsReducer = (items = {}, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ..._.mapKeys(action.payload.data, 'id'),
            };
        default:
            return items;
    }
};
