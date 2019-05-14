import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import SearchBar from './SearchBar';
import SideAction from './SideAction';
import { setTerm } from '../store/actions';

export class Header extends React.Component {
    debounceSetTerm = () => {
        return debounce(term => {
            this.props.setTerm(term);
        }, 300);
    };

    render() {
        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <SearchBar
                        term={this.props.term}
                        onSubmit={this.debouncedSetTerm}
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
