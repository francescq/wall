import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { itemsReducer } from './itemsReducer';
import { paginationReducer } from './paginatorReducer';
import { termReducer } from './termReducer';
import { favouritesReducer } from './favouritesReducer';

export default combineReducers({
    items: itemsReducer,
    form: formReducer,
    pagination: paginationReducer,
    term: termReducer,
    favourites: favouritesReducer,
});
