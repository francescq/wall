import './ItemDetail.css';
import React from 'react';
import { connect } from 'react-redux';
import { getFavourites, addFavourite, removeFavourite } from '../../actions';

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

    renderDescription = item => {
        if (this.props.fav) {
            return '';
        }
        return (
            <div className="content">
                <div className="meta">{item.email}</div>
                <div className="description">{item.description}</div>
            </div>
        );
    };

    renderExtraContent = item => {
        if (this.props.fav) {
            return '';
        }
        return (
            <div className="extra content">
                <span className="center floated">Price {item.price} €</span>
            </div>
        );
    };

    renderBottomButton = () => {
        return (
            <div
                className={`ui bottom attached button ${
                    this.isFav ? 'negative' : 'primary'
                }`}
                onClick={this.onStarClick}
            >
                <i className={`${this.isFav ? 'minus' : 'add'} icon`} />
                {this.isFav ? 'Remove from favourites' : 'Add to favourites'}
            </div>
        );
    };

    isOnFavourites(id) {
        return this.props.favourites[id] === undefined ? false : true;
    }

    renderItemCard = item => {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={`/images/${item.image}`} />
                </div>
                <div className="content">
                    <span className="header">
                        {item.title}
                        <span className="right floated">
                            <i
                                className={`star icon ${
                                    this.isFav ? 'is_favourite' : ''
                                }`}
                            />
                        </span>
                    </span>
                </div>
                {this.renderDescription(item)}
                {this.renderExtraContent(item)}
                {this.renderBottomButton()}
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
