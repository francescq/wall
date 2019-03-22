export default class ItemsApi {
    constructor(db) {
        this.db = db;
    }

    searchItems(query, pagination = { page: 0, size: 5 }) {
        console.log('fetching items', query, pagination);
        const { page, size } = pagination;

        const answer = this.db.items.filter(e => {
            if (!query) {
                return false;
            }

            const regex = new RegExp(query, 'i');

            return (
                e.title.match(regex) ||
                e.description.match(regex) ||
                e.price.match(regex) ||
                e.email.match(regex)
            );
        });

        const willFetch = new Promise(resolve => {
            const result = {};
            result.page = {};

            result.page.size = size;

            const totalPages = Math.ceil(answer.length / size);

            result.page.totalPages = totalPages;
            result.page.page = page < totalPages ? page : totalPages - 1;

            result.data = answer.slice(
                result.page.page,
                result.page.page + size
            );

            resolve(result);
        });

        return willFetch;
    }
}
