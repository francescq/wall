import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import ItemDetail from './items/ItemDetail';
import ItemDescription from './items/ItemDescription';
import Paginate from './paginate/Paginate';
import Dropdown from './dropdown/Dropdown';

class ItemList extends React.Component {
    renderItem(item) {
        return (
            <ItemDetail className="column" key={item.id} item={item}>
                <ItemDescription item={item} />
            </ItemDetail>
        );
    }

    getItemKeys(item) {
        let kv = {};

        const capitalize = st => {
            return st.replace(/\b\w/g, l => l.toUpperCase());
        };

        const properties = _.filter(Object.keys(item), e => {
            return e !== 'id' && e !== 'image';
        });

        for (let key of properties) {
            kv[key] = { key: key, value: capitalize(key) };
        }

        return kv;
    }

    render() {
        if (this.props.items.length === 0) {
            return <div>Type something to search</div>;
        }

        return (
            <div className="ui three column relaxed grid">
                <div className="sixteen wide column">
                    <Paginate />
                </div>
                <div className="sixteen wide column">
                    <Dropdown fields={this.getItemKeys(this.props.items[0])} />
                </div>
                <List items={this.props.items} renderItem={this.renderItem} />
                <div className="sixteen wide column">
                    <Paginate />
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
