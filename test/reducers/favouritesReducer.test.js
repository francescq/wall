import { favouritesReducer } from '../../src/reducers/favouritesReducer';
import {
    GET_FAVOURITES,
    ADD_FAVOURITE,
    REM_FAVOURITE,
} from '../../src/actions/types';

let action;

describe('favouritesReducer', () => {
    describe('GET_FAVOURITE', () => {
        beforeEach(() => {
            action = {
                type: GET_FAVOURITES,
                payload: { data: [{ id: 1 }, { id: 2 }] },
            };
        });

        it('should init to empty', () => {
            action.type = 'foo';

            const reduced = favouritesReducer(undefined, action);

            expect(reduced).toEqual({});
        });
    });

    describe('ADD_FAVOURITE', () => {
        beforeEach(() => {
            action = {
                type: ADD_FAVOURITE,
                payload: { item: { id: 1 } },
            };
        });

        it('should return favourites', () => {
            const reduced = favouritesReducer(null, action);

            expect(reduced).toEqual({ 1: { id: 1 } });
        });
    });

    describe('REM_FAVOURITE', () => {
        beforeEach(() => {
            action = {
                type: REM_FAVOURITE,
                payload: 1,
            };
        });

        it('should remove given favourite', () => {
            const reduced = favouritesReducer(
                { 1: { id: 1 }, 2: { id: 2 } },
                action
            );

            expect(reduced).toEqual({ 2: { id: 2 } });
        });
    });
});
