import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { getFavourites, addFavourite, removeFavourite } from '../actions';
import FavouritesList from './FavouritesList';

class SideAction extends React.Component {
    state = { show: false };

    componentDidMount() {
        this.props.getFavourites();
    }

    onDismis = e => {
        e.stopPropagation();
        this.setState({ show: false });
    };

    onFavouriteClick = e => {
        e.stopPropagation();
        this.setState({ show: true });
    };

    render() {
        if (!this.props.favourites) {
            return <div>Loading</div>;
        }

        return (
            <div onClick={this.onFavouriteClick} className="ui one column grid">
                <div className="mobile only tablet only one wide column">
                    <div className="ui segment">
                        <a className="teal item">
                            <i className="star icon" />
                        </a>
                        <div className="ui teal left pointing label">
                            {this.props.favourites.length}
                        </div>
                    </div>
                </div>
                <div className="computer only one column row">
                    <div className="ui segment">
                        <div className="ui fluid icon input">
                            <a>
                                <i className="star icon" />
                                <span>Favourites</span>
                                <div className="ui teal left pointing label">
                                    {this.props.favourites.length}
                                </div>
                            </a>
                        </div>
                    </div>
                    <Modal
                        onDismis={this.onDismis}
                        show={this.state.show}
                        content={<FavouritesList />}
                        title="Favourites"
                    />
                </div>
            </div>
        );
    }
}

const map = state => {
    return {
        favourites: state.favourites,
    };
};

export default connect(
    map,
    { getFavourites, addFavourite, removeFavourite }
)(SideAction);
