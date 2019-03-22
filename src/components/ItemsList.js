import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import ItemDetail from './items/ItemDetail';
import ItemDescription from './items/ItemDescription';
import Paginate from './paginate/Paginate';

class ItemList extends React.Component {
    onPageChange = e => {
        this.props.onPageChange(e.selected);
    };

    renderItem(item) {
        return (
            <ItemDetail className="column" key={item.id} item={item}>
                <ItemDescription item={item} />
            </ItemDetail>
        );
    }

    render() {
        if (this.props.items.length === 0) {
            return <div>Type something to search</div>;
        }

        return (
            <div className="ui three column relaxed grid">
                <div className="sixteen wide column">
                    <Paginate onPageChange={this.onPageChange} />
                </div>
                <List items={this.props.items} renderItem={this.renderItem} />
                <div className="sixteen wide column">
                    <Paginate onPageChange={this.onPageChange} />
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
