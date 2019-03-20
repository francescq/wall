import ItemsApi from '../../src/api/ItemsApi';
import db from '../../server/items.json';

describe('itempsApi', () => {
    let api;
    let myDb;

    beforeAll(() => {
        myDb = {};
        myDb.items = db.items
            .filter(e => {
                return e.title.match(/Polaroid/i);
            })
            .map((e, i) => {
                e.title = `polaroid${i}`;
                return e;
            })
            .slice(0, 5);

        api = new ItemsApi(myDb);
    });

    it('should return all items', () => {
        const items = api.searchItems(null);

        expect(items.results.length).toEqual(myDb.items.length);
    });

    it('should filter by total match', () => {
        const items = api.searchItems('Polaroid0');

        expect(items.results.length).toBe(1);
    });

    it('should filter by partial match ', () => {
        const items = api.searchItems('pola');

        expect(items.results.length).toBe(5);
    });

    it('should filter case insensitive ', () => {
        const items = api.searchItems('POLa');

        expect(items.results.length).toBe(5);
    });

    describe('pagination', () => {
        it('should default to size 5 and page 1', () => {
            const items = api.searchItems('pola');

            expect(items.page.page).toBe(0);
            expect(items.page.size).toBe(5);
        });

        describe('page', () => {
            it('should return -1 if no result', () => {
                const items = api.searchItems('foo', { page: 4, size: 1 });

                expect(items.page.page).toBe(-1);
            });

            it('should return the current page', () => {
                const items = api.searchItems('pOlaroid', { page: 4, size: 1 });

                expect(items.page.page).toBe(4);
            });

            it('overflowing should return the last page', () => {
                const items = api.searchItems('pOlaroid', {
                    page: 999,
                    size: 1,
                });

                expect(items.page.page).toBe(4);
            });
        });

        describe('size', () => {
            it('should return pages of x element', () => {
                const items = api.searchItems('pOlaroid', { page: 1, size: 3 });

                expect(items.results.length).toBe(3);
                expect(items.page.size).toBe(3);
            });

            it('should return lenth 0 and size 1 if no results', () => {
                const items = api.searchItems('foo', { page: 1, size: 1 });

                expect(items.results.length).toBe(0);
                expect(items.page.size).toBe(1);
            });
        });

        describe('totalPages', () => {
            it('should return totalPages 5', () => {
                const items = api.searchItems('pOlaroid', { page: 1, size: 1 });

                expect(items.page.totalPages).toBe(5);
            });

            it('should return 0 when the result is empty', () => {
                const items = api.searchItems('foo', { page: 1, size: 1 });

                expect(items.page.totalPages).toBe(0);
            });
        });

        describe('data', () => {
            it('should return 1st page', () => {
                const items = api.searchItems('pOlaroid', { page: 0, size: 1 });

                expect(items.results[0].title).toEqual('polaroid0');
                expect(items.page.totalPages).toBe(5);
            });

            it('should return 2nd page', () => {
                const items = api.searchItems('pOlaroid', { page: 1, size: 1 });

                expect(items.results[0].title).toEqual('polaroid1');
                expect(items.page.page).toBe(1);
            });

            it('overflowing should return last page', () => {
                const items = api.searchItems('pOlaroid', {
                    page: 999,
                    size: 1,
                });

                expect(items.results[0].title).toEqual('polaroid4');
                expect(items.results.length).toBe(1);
            });
        });
    });
});
