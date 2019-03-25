import { termReducer } from '../../src/reducers/termReducer';
import { SET_TERM } from '../../src/actions/types';

let action;

describe('termReducer', () => {
    beforeEach(() => {
        action = {
            type: SET_TERM,
            payload: 'newTerm',
        };
    });

    it('should init term to empty string', () => {
        action.type = 'foo';

        const reduced = termReducer(undefined, action);

        expect(reduced).toEqual('');
    });

    it('should return new term', () => {
        const reduced = termReducer(null, action);

        expect(reduced).toEqual('newTerm');
    });
});
