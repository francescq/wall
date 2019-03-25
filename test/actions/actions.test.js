import { setTerm, searchItem } from '../../src/actions';
import {
    GET_ITEMS,
    SET_TERM,
    GET_FAVOURITES,
    ADD_FAVOURITE,
    REM_FAVOURITE,
} from '../../src/actions/types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getAction } from '../utils/reduxThunk';

import '@babel/polyfill';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    describe('setTerm', () => {
        it('should set SET_TERM type', async () => {
            store.dispatch(setTerm('myTerm'));

            expect(store.getActions()[0].type).toEqual(SET_TERM);
        });

        it('should set term as payload', async () => {
            store.dispatch(setTerm('myTerm'));

            expect(await getAction(store, SET_TERM)).toEqual({
                payload: 'myTerm',
                type: 'SET_TERM',
            });
        });

        it('should dispatch searchItem action', async () => {
            store.dispatch(setTerm('myTerm'));

            expect(await getAction(store, GET_ITEMS)).toEqual({
                payload: {
                    data: [],
                    page: {
                        order: 'asc',
                        orderBy: 'title',
                        page: -1,
                        size: 5,
                        totalPages: 0,
                    },
                },
                type: 'GET_ITEMS',
            });
        });
    });
});
