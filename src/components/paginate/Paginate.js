import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { searchItem } from '../../actions';

import './Paginate.css';

class Paginate extends React.Component {
    onPageChange = newPageNumber => {
        const newPage = this.props.pagination.page;
        newPage.page = newPageNumber.selected;
        console.log('page change');
        this.props.searchItem(newPage);
    };

    render() {
        const { page } = this.props.pagination;

        return (
            <ReactPaginate
                onPageChange={this.onPageChange}
                pageCount={page.totalPages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={0}
                initialPage={page.page}
                nextLabel={'>'}
                previousLabel={'<'}
                breakLabel={'...'}
                breakClassName={'ui segment page disabled'}
                containerClassName={'ui segment'}
                disabledClassName={'disabled'}
                pageClassName="ui segment page"
                nextClassName={'ui segment page'}
                previousClassName={'ui segment page'}
                activeClassName={'activePage'}
            />
        );
    }
}

const map = state => {
    return {
        pagination: state.pagination,
    };
};
export default connect(
    map,
    { searchItem }
)(Paginate);
