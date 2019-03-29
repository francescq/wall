import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { getAction } from '../../utils/reduxThunk';
import ItemsApi from '../../../src/api/ItemsApi';

import { setTerm, searchItem } from '../../../src/store/actions';
import {
    GET_ITEMS,
    SET_TERM,
    GET_FAVOURITES,
    ADD_FAVOURITE,
    REM_FAVOURITE,
} from '../../../src/store/actions/types';

import '@babel/polyfill';

let state = {
    term: 'myTerm',
    pagination: { orderBy: 'title', order: 'asc' },
};
const mockStore = configureStore([thunk]);
const store = mockStore(() => state);
let itemsApi;

describe('actions', () => {
    beforeEach(() => {
        store.clearActions();

        itemsApi = new ItemsApi({});
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

    describe('searchItem', () => {
        let stub;
        beforeEach(() => {
            stub = sinon.spy(ItemsApi.prototype, 'searchItems');
        });

        afterEach(() => {
            stub.restore();
        });
        it('searchItem', () => {
            store.dispatch(searchItem());

            expect(stub.calledOnce).toBe(true);
        });

        it('should get the current term from the state', () => {
            store.dispatch(searchItem());

            const props = stub.args[0][0];

            expect(props).toEqual('myTerm');
        });

        it('should return a GET_ITEMS action', async () => {
            store.dispatch(searchItem());

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
                type: GET_ITEMS,
            });
        });
    });

    describe('addFavourite', () => {});
});
