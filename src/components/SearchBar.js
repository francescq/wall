import React from 'react';

import { setTerm, searchItem } from '../actions';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {
    componentDidMount() {}

    renderInput({ input, label, meta }) {
        return <input {...input} placeholder="search something" type="text" />;
    }

    onSubmit = formProps => {
        this.props.onSubmit(formProps);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="ui fluid icon input">
                        <Field
                            name="search"
                            component={this.renderInput}
                            label="Search"
                        />

                        <i className="search icon" />
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'searchForm',
})(SearchBar);
