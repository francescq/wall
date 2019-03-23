import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import ItemDetail from './items/ItemDetail';
import ItemDescription from './items/ItemDescription';
import Paginate from './paginate/Paginate';

class ItemList extends React.Component {
    renderItem(item) {
        return (
            <ItemDetail className="column" key={item.id} item={item}>
                <ItemDescription item={item} />
            </ItemDetail>
        );
    }

    render() {
        if (this.props.items.length === 0) {
            return <div className="ui center">Type something to search</div>;
        }

        return (
            <div className="ui stackable one column grid">
                <div className="column">
                    <Paginate />
                </div>
                <div className="column">
                    <List
                        items={this.props.items}
                        renderItem={this.renderItem}
                        className="ui stackable three column centered grid"
                    />
                </div>
                <div className="column">
                    <Paginate />
                </div>
            </div>
        );
    }
}

const map = state => {
    return {
        items: Object.values(state.items),
    };
};

export default connect(
    map,
    {}
)(ItemList);
