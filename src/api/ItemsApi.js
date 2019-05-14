export default class ItemsApi {
    constructor(db) {
        this.db = db;
    }

    _queryItems = query => {
        return this.db.items.filter(e => {
            if (!query) {
                return this.db.items;
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

    _getPageMeta = answer => {
        const { page, size, orderBy, order } = this.pagination;

        const totalPages = Math.ceil(answer.length / size);

        const pageMeta = {};
        pageMeta.size = size;
        pageMeta.totalPages = totalPages;
        pageMeta.page =
            page < totalPages ? page : totalPages - 1 >= 0 ? totalPages - 1 : 0;
        pageMeta.orderBy = orderBy;
        pageMeta.order = order;

        return pageMeta;
    };

    _applyOrder = answer => {
        const { orderBy, order } = this.pagination;

        if (!orderBy) {
            return answer;
        }
        if (!answer.length) {
            return answer;
        }

        const myOrder = order === 'asc' ? 1 : -1;

        const isNumber = isNaN(answer[0][orderBy]) ? false : true;

        const compareString = (a, b) => {
            const aParam = a[orderBy];
            const bParam = b[orderBy];

            let compare = 0;

            if (aParam > bParam) {
                compare = 1;
            }
            if (aParam < bParam) {
                compare = -1;
            }

            return compare * myOrder;
        };

        const compareNumber = (a, b) => {
            const compare = parseInt(a[orderBy]) - parseInt(b[orderBy]);
            return compare * myOrder;
        };

        isNumber ? answer.sort(compareNumber) : answer.sort(compareString);

        // console.log(answer);

        return answer;
    };

    getPage = (orderedAnswer, page) => {
        const start = page.page * page.size;
        const offset = start + page.size;

        const slicedPage = orderedAnswer.slice(start, offset);
        //console.log(start, offset, slicedPage);

        return slicedPage;
    };

    searchItems(query, pagination = {}) {
        if (!pagination.page) {
            pagination.page = 0;
        }
        if (!pagination.size) {
            pagination.size = 5;
        }

        this.pagination = pagination;

        // console.log(
        //     `fetching items query:${query}, pagination: ${JSON.stringify(
        //         pagination
        //     )}`
        // );

        const willFetch = new Promise(resolve => {
            const result = {};
            const answer = this._queryItems(query);
            const orderedAnswer = this._applyOrder(answer);
            result.page = this._getPageMeta(orderedAnswer);

            result.data = this.getPage(orderedAnswer, result.page);

            resolve(result);
        });

        return willFetch;
    }
}
