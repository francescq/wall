import React from 'react';

import Paginate from './paginate/Paginate';

class List extends React.Component {
    onPageChange = e => {
        this.props.onPageChange(e.selected);
    };

    renderPagination() {
        return <Paginate onPageChange={this.onPageChange} />;
    }

    renderedList() {
        return this.props.items.map(item => {
            return <ItemDetail className="column" key={item.id} item={item} />;
        });
    }

    render() {
        if (this.props.items.length === 0) {
            return <div>Type something to search</div>;
        }

        return (
            <div className="ui three column relaxed grid">
                <div className="sixteen wide column">
                    {this.renderPagination()}
                </div>
                {props.children}
                <div className="sixteen wide column">
                    {this.renderPagination()}
                </div>
            </div>
        );
    }
}

const map = (state, props) => {
    return {
        items: Object.values(state.items),
    };
};

export default List;
