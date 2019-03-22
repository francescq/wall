export default class ItemsApi {
    constructor(db) {
        this.db = db;
    }

    searchItems(query, pagination = { page: 0, size: 5 }) {
        //console.log('fetching items', query, pagination);
        const { page, size } = pagination;

        const queryItem = () => {
            return this.db.items.filter(e => {
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
        };

        const getPageMeta = (answer, page, size) => {
            const pageMeta = {};

            pageMeta.size = size;

            const totalPages = Math.ceil(answer.length / size);

            pageMeta.totalPages = totalPages;
            pageMeta.page = page < totalPages ? page : totalPages - 1;

            return pageMeta;
        };

        const applyOrder = answer => {
            return answer;
        };

        const willFetch = new Promise(resolve => {
            const result = {};

            const answer = queryItem();
            const orderedAnswer = applyOrder(answer);
            result.page = getPageMeta(orderedAnswer, page, size);

            const start = result.page.page * size;
            const offset = start + size;

            result.data = orderedAnswer.slice(start, offset);
            //console.log(start, offset, result.data);

            resolve(result);
        });

        return willFetch;
    }
}
