import { setTerm } from '../../src/actions';

describe.skip('actions', () => {
    describe('setTerm', () => {
        it('should do something', async () => {
            const dispatch = jest.fn();

            await setTerm('term');

            expect(dispatch).toBeCalledWith({ type: SET_TERM, payload: term });
        });
    });
});
