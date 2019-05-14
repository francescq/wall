import { combineReducers } from 'redux'

import { itemsReducer } from './itemsReducer'
import { paginationReducer } from './paginatorReducer'
import { termReducer } from './termReducer'
import { favouritesReducer } from './favouritesReducer'

export default combineReducers({
  items: itemsReducer,
  pagination: paginationReducer,
  term: termReducer,
  favourites: favouritesReducer
})
