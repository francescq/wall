import { termReducer } from '../../src/reducers/termReducer';
import { SET_TERM } from '../../src/actions/types';

describe('termReducer', () => {
    it('should init term to empty string', () => {
        const action = {
            type: 'foo',
            payload: 'newTerm',
        };

        const reduced = termReducer(undefined, action);

        expect(reduced).toEqual('');
    });

    it('should return new term', () => {
        const action = {
            type: SET_TERM,
            payload: 'newTerm',
        };

        const reduced = termReducer(null, action);

        expect(reduced).toEqual('newTerm');
    });
});
