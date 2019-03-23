import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions';
import FavouritesList from './FavouritesList';
import './SideAction.scss';

class SideAction extends React.Component {
    state = { show: false };

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
                <div className="mobile only tablet only column">
                    <div className="ui segment">
                        <a className="teal item">
                            <i
                                className={`star icon ${
                                    this.props.favourites.length
                                        ? 'are_favourites'
                                        : ''
                                }`}
                            />
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
        favourites: Object.values(state.favourites),
    };
};

export default connect(
    map,
    { addFavourite, removeFavourite }
)(SideAction);
