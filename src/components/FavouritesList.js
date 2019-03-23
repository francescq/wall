import React from 'react';
import { connect } from 'react-redux';

import ItemDetail from './items/ItemDetail';
import List from './List';
import Filter from './Filter';

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
            <div className="ui stackable one column grid">
                <Filter
                    className="column"
                    favourites={this.props.favourites}
                    key={this.props.favourites.length}
                >
                    <List
                        className="ui stackable three column centered grid"
                        renderItem={this.renderFavItem}
                        emptyMessage={
                            <div className="ui column content">
                                Favourites is empty
                            </div>
                        }
                    />
                </Filter>
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
