import React from 'react';
import { connect } from 'react-redux';

import ItemDetail from './items/ItemDetail';
import Paginate from './paginate/Paginate';
import List from './List';

import './ItemList.css';

class ItemList extends React.Component {
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
                {this.renderedList()}
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

export default connect(
    map,
    {}
)(ItemList);
