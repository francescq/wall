import { paginationReducer } from '../../src/reducers/paginatorReducer';
import { GET_ITEMS } from '../../src/actions/types';

let action;

describe('paginatorReducer', () => {
    beforeEach(() => {
        action = {
            type: GET_ITEMS,
            payload: { page: { foo: 'bar' } },
        };
    });

    it('should init page to empty', () => {
        action.type = 'foo';

        const reduced = paginationReducer(undefined, action);

        expect(reduced).toEqual({ page: { orderBy: 'title', order: 'asc' } });
    });

    it('should return new term', () => {
        const reduced = paginationReducer(null, action);

        expect(reduced).toEqual({ page: { foo: 'bar' } });
    });
});
