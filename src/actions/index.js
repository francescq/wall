import {
    GET_ITEMS,
    SET_TERM,
    GET_FAVOURITES,
    ADD_FAVOURITE,
    REM_FAVOURITE,
} from '../actions/types';

import ItemsApi from '../api/ItemsApi';
import db from '../../server/items.json';
import FavouritesApi from '../api/FavouritesApi';

const itemsApi = new ItemsApi(db);
const favouritesApi = new FavouritesApi();

export const searchItem = page => async (dispatch, getState) => {
    const myPage = page ? page : { orderBy: 'title', order: 'asc' };

    const term = getState().term;

    const answer = await itemsApi.searchItems(term, myPage);

    return dispatch({
        type: GET_ITEMS,
        payload: answer,
    });
};

export const setTerm = term => async dispatch => {
    dispatch({ type: SET_TERM, payload: term });

    return dispatch(searchItem());
};

export const getFavourites = () => async dispatch => {
    const answer = await favouritesApi.get();

    return dispatch({
        type: GET_FAVOURITES,
        payload: answer,
    });
};

export const addFavourite = item => async dispatch => {
    const answer = {};
    answer.item = item;

    return dispatch({
        type: ADD_FAVOURITE,
        payload: answer,
    });
};

export const removeFavourite = id => async dispatch => {
    return dispatch({
        type: REM_FAVOURITE,
        payload: id,
    });
};
