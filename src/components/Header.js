import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SideAction from './SideAction';
import { setTerm } from '../actions';

class Header extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <SearchBar
                        initialValues={_.pick(this.props.term, 'term')}
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
