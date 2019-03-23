import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filteredFavourites: this.props.favourites.slice(),
        };
    }

    onChange = e => {
        e.preventDefault();
        const term = e.target.value;

        const filteredFavourites = this.props.favourites.filter(e => {
            return e.title.match(new RegExp(term, 'i'));
        });

        this.setState({ filteredFavourites: filteredFavourites });
    };

    render() {
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { items: this.state.filteredFavourites })
        );

        return (
            <div className="column">
                <div className="ui fluid icon input">
                    <input
                        onChange={this.onChange}
                        className="push"
                        type="text"
                        placeholder="Search..."
                    />
                    <i className="circular search link icon" />
                </div>
                {childrenWithProps}
            </div>
        );
    }
}
export default Filter;
