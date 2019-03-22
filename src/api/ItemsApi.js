export default class ItemsApi {
    constructor(db) {
        this.db = db;
    }

    searchItems(query, pagination = {}) {
        if (!pagination.page) {
            pagination.page = 0;
        }
        if (!pagination.size) {
            pagination.size = 5;
        }
        if (!pagination.order) {
            pagination.order = 'asc';
        }

        const { page, size, orderBy, order } = pagination;
        //console.log('fetching items', query, pagination);

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
            if (!pagination.orderBy) {
                return answer;
            }
            const order = pagination.order === 'asc' ? 1 : -1;

            answer.sort((a, b) => {
                const aParam = a[orderBy];
                const bParam = b[orderBy];

                let compare = 0;

                if (aParam > bParam) {
                    compare = 1;
                }
                if (aParam < bParam) {
                    compare = -1;
                }

                console.log(aParam, bParam, compare, order);
                return compare * order;
            });

            console.log(answer);

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
