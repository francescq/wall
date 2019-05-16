import {
    GET_ITEMS,
    SET_PAGE,
    SET_TERM,
    ADD_FAVOURITE,
    REM_FAVOURITE,
    GET_FAVOURITES,
} from './types';

import ItemsApi from '../../api/ItemsApi';
import db from '../../../server/items.json';
import FavouritesApi from '../../api/FavouritesApi';

const itemsApi = new ItemsApi(db);
const favouritesApi = new FavouritesApi();

export const searchItem = () => async (dispatch, getState) => {
    const term = getState().term;
    const page = getState().pagination;
    //console.log('search', term, page);

    const answer = await itemsApi.searchItems(term, page);

    return dispatch({
        type: GET_ITEMS,
        payload: answer,
    });
};

export const setTerm = term => async dispatch => {
    dispatch({ type: SET_TERM, payload: term });

    //console.log('setTerm', term);
    return dispatch(searchItem());
};

export const setPage = page => async dispatch => {
    dispatch({ type: SET_PAGE, payload: page });

    return dispatch(searchItem());
};

export const getFavourites = () => async dispatch => {
    const fav = await favouritesApi.get();

    return dispatch({
        type: GET_FAVOURITES,
        payload: fav,
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
