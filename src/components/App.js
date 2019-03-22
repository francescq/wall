import React from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import SearchBar from './SearchBar';
import SideAction from './SideAction';
import ItemsList from './ItemsList';
import { setTerm, getFavourites } from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.getFavourites();
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="thirteen wide column">
                    <SearchBar
                        initialValues={_.pick(this.props.term, 'term')}
                        onSubmit={this.props.setTerm}
                    />
                </div>
                {/* <Modal title="Favourites" content="content" actions="actions" /> */}
                <div className="three wide column">
                    <SideAction />
                </div>

                <div className="sixteen wide column">
                    <ItemsList />
                </div>
            </div>
        );
    }
}

const map = state => {
    return {
        term: state.term,
    };
};

export default connect(
    map,
    { setTerm, getFavourites }
)(App);
