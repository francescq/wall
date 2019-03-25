import { itemsReducer } from '../../src/reducers/itemsReducer';
import { GET_ITEMS } from '../../src/actions/types';

let action;

describe('itemsReducer', () => {
    beforeEach(() => {
        action = {
            type: GET_ITEMS,
            payload: { data: [{ id: 1 }, { id: 2 }] },
        };
    });

    it('should init items to empty', () => {
        action.type = 'foo';

        const reduced = itemsReducer(undefined, action);

        expect(reduced).toEqual({});
    });

    it('should return new term', () => {
        const reduced = itemsReducer(null, action);

        expect(reduced).toEqual({ 1: { id: 1 }, 2: { id: 2 } });
    });
});
