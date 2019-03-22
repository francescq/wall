import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: false,
            order: 'asc',
            orderBy: Object.values(this.props.fields)[0].key,
        };
    }

    toggle = e => {
        e.preventDefault();
        this.setState({ dropdownActive: !this.state.dropdownActive });
    };

    doOrderBy = e => {
        e.preventDefault();
        const newOrderBy = e.target.getAttribute('data-value');
        this.setState({ orderBy: newOrderBy });
    };

    doOrder = e => {
        e.preventDefault();
        const newOrder = e.target.getAttribute('data-value');
        this.setState({ order: newOrder });
    };

    renderItem(item, checked) {
        return (
            <div className="item" key={item.key}>
                <a href="#" onClick={this.doOrderBy} data-value={item.key}>
                    {item.value}{' '}
                    {this.state.orderBy === item.key ? checked : null}
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
            <div className="ui dropdown active">
                <button onClick={this.toggle} className="ui button primary">
                    {this.getCurentOrderedProperty(this.state.orderBy)}
                    <i
                        className={`${
                            this.state.order === 'desc'
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
                    <div className="item">
                        <a href="#" onClick={this.doOrder} data-value="asc">
                            ascendind{' '}
                            {this.state.order === 'asc' ? checked : null}
                        </a>
                    </div>
                    <div className="item">
                        <a href="#" onClick={this.doOrder} data-value="desc">
                            descending{' '}
                            {this.state.order === 'desc' ? checked : null}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dropdown;
