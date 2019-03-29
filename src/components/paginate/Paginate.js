import React from 'react';
import ReactPaginate from 'react-paginate';
import Dropdown from '../dropdown/Dropdown';
import { connect } from 'react-redux';
import { searchItem } from '../../store/actions';

import './Paginate.scss';

class Paginate extends React.Component {
    onPageChange = newPageNumber => {
        const newPage = this.props.pagination.page;
        newPage.page = newPageNumber.selected;
        console.log('page change');
        this.props.searchItem(newPage);
    };

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
        const { page } = this.props.pagination;

        return (
            <div className="ui grid">
                <div className="eleven wide column">
                    <ReactPaginate
                        onPageChange={this.onPageChange}
                        pageCount={page.totalPages}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={0}
                        initialPage={page.page}
                        nextLabel={'>'}
                        previousLabel={'<'}
                        breakLabel={'...'}
                        breakClassName={'ui segment page disabled'}
                        containerClassName={'paginateLeft'}
                        disabledClassName={'disabled'}
                        pageClassName="ui segment page unactivePage"
                        nextClassName={'ui segment page'}
                        previousClassName={'ui segment page'}
                        activeClassName={'activePage'}
                    />
                </div>
                <div className="five wide column">
                    <Dropdown fields={this.getItemKeys(this.props.items[0])} />
                </div>
            </div>
        );
    }
}

const map = state => {
    return {
        pagination: state.pagination,
        items: Object.values(state.items),
    };
};
export default connect(
    map,
    { searchItem }
)(Paginate);
