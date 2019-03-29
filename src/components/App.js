import React from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import Header from './Header';
import ItemsList from './ItemsList';
import GoogleTagManager from './GoogleTagManager';
import { getFavourites } from '../store/actions';

export class App extends React.Component {
    componentDidMount() {
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

export default connect(
    null,
    { getFavourites }
)(App);
