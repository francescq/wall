import React from 'react';
import { connect } from 'react-redux';

import ItemDetail from './items/ItemDetail';
import List from './List';

class FavouritesList extends React.Component {
    renderFavItem(item) {
        return (
            <ItemDetail
                className="column"
                key={item.id}
                item={item}
                fav={true}
            />
        );
    }

    render() {
        return (
            <div className="ui three column relaxed grid">
                <List
                    items={this.props.favourites}
                    renderItem={this.renderFavItem}
                    emptyMessage={
                        <div className="content">Favourites is empty</div>
                    }
                />
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
