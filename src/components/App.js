import React from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import Header from './Header';
import ItemsList from './ItemsList';
import GoogleTagManager from './GoogleTagManager';
import { getFavourites } from '../store/actions';
import { GET_FAVOURITES } from '../store/actions/types';

export class App extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getFavourites();
    }

    render() {
        return (
            <div className="ui container">
                <Header />
                <ItemsList />
                <GoogleTagManager gtmId="UA-137188719-1" />
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        getFavourites: () => {
            dispatch({
                type: GET_FAVOURITES,
                payload: getFavourites,
            });
        },
    };
};

export default connect(
    null,
    mapDispatch
)(App);
