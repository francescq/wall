export default class FavouritesAPI {
    get() {
        return new Promise(resolve => resolve({}));
    }

    create(item) {
        const answer = {};
        answer.data = item;
        return new Promise(resolve => resolve(answer));
    }

    delete(id) {
        return new Promise(resolve => resolve(id));
    }
}
