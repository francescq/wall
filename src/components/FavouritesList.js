import React from 'react';
import { connect } from 'react-redux';

import ItemDetail from './items/ItemDetail';

class FavouritesList extends React.Component {
    renderedList = () => {
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
        return (
            <div className="ui three column relaxed grid">
                {this.renderedList()}
            </div>
        );
    }
}

const map = state => {
    return {
        favourites: Object.values(state.favourites),
    };
};

export default connect(map)(FavouritesList);
