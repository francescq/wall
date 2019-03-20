export default class ItemsApi {
    constructor(db) {
        this.db = db;
    }

    searchItems(query, pagination = { page: 0, size: 5 }) {
        const { page, size } = pagination;

        const answer = this.db.items.filter(e => {
            if (!query) {
                return true;
            }

            return e.title.match(new RegExp(query, 'i'));
        });

        const result = {};
        result.page = {};

        result.page.size = size;

        const totalPages = Math.ceil(answer.length / size);

        result.page.totalPages = totalPages;
        result.page.page = page < totalPages ? page : totalPages - 1;

        result.results = answer.slice(
            result.page.page,
            result.page.page + size
        );

        return result;
    }
}
