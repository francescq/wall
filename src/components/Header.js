import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './SearchBar';
import SideAction from './SideAction';
import { setTerm } from '../store/actions';

export class Header extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <SearchBar
                        term={this.props.term}
                        onSubmit={this.props.setTerm}
                    />
                </div>
                <div className="five wide column">
                    <SideAction />
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
    { setTerm }
)(Header);
