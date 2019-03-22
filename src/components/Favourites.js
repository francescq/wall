import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './items/ItemDetail';

class Favourites extends React.Component {
    renderFavItems = () => {
        const { favourites } = this.props;

        if (favourites.length === 0) {
            return <div>Favourites are empty</div>;
        }

        return favourites.map(item => {
            return (
                <ItemDetail
                    className="column"
                    key={item.id}
                    item={item}
                    fav={true}
                />
            );
        });
    };

    render() {
        return <div>{this.renderFavItems()}</div>;
    }
}

const map = state => {
    return {
        favourites: Object.values(state.favourites),
        // cache: state.cache,
    };
};

export default connect(map)(Favourites);
