import './ItemDetail.css';
import React from 'react';
import { connect } from 'react-redux';
import { getFavourites, addFavourite, removeFavourite } from '../../actions';

import ItemHeader from './ItemHeader';
import ItemFavouriteButton from './ItemFavouriteButton';

require.context('../../images/', true, /\.(png|svg|jpg|gif)$/);

class ItemDetail extends React.Component {
    onStarClick = e => {
        const { item } = this.props;

        if (this.isFav) {
            this.props.removeFavourite(item.id);
        } else {
            this.props.addFavourite(item);
        }
    };

    isOnFavourites(id) {
        return this.props.favourites[id] === undefined ? false : true;
    }

    renderItemCard = item => {
        return (
            <div className="ui card">
                <ItemHeader item={item} isFav={this.isFav} />
                {this.props.children}
                <ItemFavouriteButton
                    isFav={this.isFav}
                    onStarClick={this.onStarClick}
                />
            </div>
        );
    };

    render() {
        this.isFav = this.isOnFavourites(this.props.item.id);

        return (
            <div className="item-container">
                {this.renderItemCard(this.props.item)}
            </div>
        );
    }
}

const map = (state, props) => {
    return { item: props.item, favourites: state.favourites };
};

export default connect(
    map,
    { getFavourites, addFavourite, removeFavourite }
)(ItemDetail);
