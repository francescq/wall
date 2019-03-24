import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './SearchBar';
import SideAction from './SideAction';
import { setTerm } from '../actions';

export class Header extends React.Component {
    pickTerm = props => {
        return _.pick(props, 'term');
    };

    render() {
        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <SearchBar
                        initialValues={this.pickTerm(this.props)}
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
