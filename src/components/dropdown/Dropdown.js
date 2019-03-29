import React from 'react';

import { connect } from 'react-redux';
import { searchItem } from '../../store/actions';
import './Dropdown.scss';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownActive: false,
        };
    }

    toggle = e => {
        e.preventDefault();
        this.setState({ dropdownActive: !this.state.dropdownActive });
    };

    doOrderBy = e => {
        e.preventDefault();
        const newOrderBy = e.target.getAttribute('data-value');

        const newPage = this.props.pagination.page;
        newPage.orderBy = newOrderBy;
        console.log('do orderBy');
        this.props.searchItem(newPage);
    };

    doOrder = e => {
        e.preventDefault();
        const newOrder = e.target.getAttribute('data-value');

        const newPage = this.props.pagination.page;
        newPage.order = newOrder;
        console.log('do order');
        this.props.searchItem(newPage);
    };

    renderItem(item, checked) {
        return (
            <div
                className="item"
                key={item.key}
                onClick={this.doOrderBy}
                data-value={item.key}
            >
                <a href="#" onClick={this.doOrderBy} data-value={item.key}>
                    {item.value}{' '}
                    {this.props.pagination.page.orderBy === item.key
                        ? checked
                        : null}
                </a>
            </div>
        );
    }

    getCurentOrderedProperty = orderBy => {
        return this.props.fields[orderBy].value;
    };

    render() {
        const checked = <i className="check icon" />;
        const output = Object.values(this.props.fields).map(item => {
            return this.renderItem(item, checked);
        });

        return (
            <span className="ui dropdown active">
                <button
                    onClick={this.toggle}
                    className="ui button primary dropdown_align"
                >
                    {this.getCurentOrderedProperty(
                        this.props.pagination.page.orderBy
                    )}
                    <i
                        className={`${
                            this.props.pagination.page.order === 'desc'
                                ? 'sort down'
                                : 'sort up'
                        } icon`}
                    />
                </button>
                <div
                    className={`menu transition ${
                        this.state.dropdownActive ? 'visible' : 'hidden'
                    }`}
                >
                    {output}
                    <div className="divider" />
                    <div
                        className="item"
                        onClick={this.doOrder}
                        data-value="asc"
                    >
                        <a href="#" onClick={this.doOrder} data-value="asc">
                            ascendind{' '}
                            {this.props.pagination.page.order === 'asc'
                                ? checked
                                : null}
                        </a>
                    </div>
                    <div
                        className="item"
                        onClick={this.doOrder}
                        data-value="desc"
                    >
                        <a href="#" onClick={this.doOrder} data-value="desc">
                            descending{' '}
                            {this.props.pagination.page.order === 'desc'
                                ? checked
                                : null}
                        </a>
                    </div>
                </div>
            </span>
        );
    }
}

const map = state => {
    return { pagination: state.pagination };
};

export default connect(
    map,
    { searchItem }
)(Dropdown);
