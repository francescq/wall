import React from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import Header from './Header';
import ItemsList from './ItemsList';
import { getFavourites, searchItem } from '../store/actions';

export class App extends React.Component {
    componentDidMount() {
        this.props.getFavourites();
        this.props.searchItem();
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
    { getFavourites, searchItem }
)(App);
