import React from 'react';
import { connect } from 'react-redux';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: props.term };
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.props.term !== this.state.term) {
            this.props.onSubmit(this.state.term);
        }
    };

    onChange = e => {
        const newTerm = e.target.value;
        this.setState({ term: newTerm });

        this.props.onSubmit(newTerm);
    };

    render() {
        return (
            <div className="ui ten wide column segment">
                <form id="search-form" onSubmit={this.onSubmit}>
                    <div className="ui fluid icon input">
                        <input
                            id="search"
                            onChange={this.onChange}
                            placeholder="type your search"
                            type="text"
                            value={this.state.term}
                        />
                        <i
                            id="search-icon"
                            onClick={this.onSubmit}
                            className="circular search link icon"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

const map = state => {
    return {
        term: state.term,
    };
};

export default connect(map)(SearchBar);
