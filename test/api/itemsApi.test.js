import ItemsApi from '../../src/api/ItemsApi';
import db from '../../server/items.json';
import '@babel/polyfill';

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

    describe('search', () => {
        it('should return all items', async () => {
            const items = await api.searchItems(null);

            expect(items.data.length).toEqual(0);
        });

        it('should filter by total match', async () => {
            const items = await api.searchItems('Polaroid0');

            expect(items.data.length).toBe(1);
        });

        it('should filter by partial match ', async () => {
            const items = await api.searchItems('pola');

            expect(items.data.length).toBe(5);
        });

        it('should filter case insensitive ', async () => {
            const items = await api.searchItems('POLa');

            expect(items.data.length).toBe(5);
        });

        describe('fiels', () => {
            it('should OR filter by title', async () => {
                const items = await api.searchItems('Polaroid0');

                expect(items.data.length).toBe(1);
            });

            it('should OR filter by description', async () => {
                const items = await api.searchItems('cámara');

                expect(items.data.length).toBe(5);
            });

            it('should OR filter by email', async () => {
                const items = await api.searchItems('wallapop');

                expect(items.data.length).toBe(5);
            });

            it('should OR filter by price', async () => {
                const items = await api.searchItems('50');

                expect(items.data.length).toBe(5);
            });
        });
    });

    describe('pagination', () => {
        it('should default to size 5 and page 1', async () => {
            const items = await api.searchItems('pola');

            expect(items.page.page).toBe(0);
            expect(items.page.size).toBe(5);
        });

        describe('page', () => {
            it('should return -1 if no result', async () => {
                const items = await api.searchItems('foo', {
                    page: 4,
                    size: 1,
                });

                expect(items.page.page).toBe(-1);
            });

            it('should return the current page', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 4,
                    size: 1,
                });

                expect(items.page.page).toBe(4);
            });

            it('overflowing should return the last page', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 999,
                    size: 1,
                });

                expect(items.page.page).toBe(4);
            });
        });

        describe('size', () => {
            it('should return pages of x element', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 1,
                    size: 3,
                });

                expect(items.data.length).toBe(3);
                expect(items.page.size).toBe(3);
            });

            it('should return lenth 0 and size 1 if no results', async () => {
                const items = await api.searchItems('foo', {
                    page: 1,
                    size: 1,
                });

                expect(items.data.length).toBe(0);
                expect(items.page.size).toBe(1);
            });
        });

        describe('totalPages', () => {
            it('should return totalPages 5', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 1,
                    size: 1,
                });

                expect(items.page.totalPages).toBe(5);
            });

            it('should return 0 when the result is empty', async () => {
                const items = await api.searchItems('foo', {
                    page: 1,
                    size: 1,
                });

                expect(items.page.totalPages).toBe(0);
            });
        });

        describe('data', () => {
            it('should return 1st page', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 0,
                    size: 1,
                });

                expect(items.data[0].title).toEqual('polaroid0');
                expect(items.page.totalPages).toBe(5);
            });

            it('should return 2nd page', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 1,
                    size: 1,
                });

                expect(items.data[0].title).toEqual('polaroid1');
                expect(items.page.page).toBe(1);
            });

            it('overflowing should return last page', async () => {
                const items = await api.searchItems('pOlaroid', {
                    page: 999,
                    size: 1,
                });

                expect(items.data[0].title).toEqual('polaroid4');
                expect(items.data.length).toBe(1);
            });
        });
    });
});
