import React from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import Header from './Header';
import ItemsList from './ItemsList';
import { getFavourites } from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getFavourites();
    }

    render() {
        return (
            <div className="ui container">
                <Header />
                <ItemsList />
            </div>
        );
    }
}

export default connect(
    null,
    { getFavourites }
)(App);
