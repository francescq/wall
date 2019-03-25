import React from 'react';
import { Field, reduxForm } from 'redux-form';

export class SearchBar extends React.Component {
    renderInput({ input }) {
        return (
            <input
                id="search"
                {...input}
                placeholder="type your search"
                type="text"
            />
        );
    }

    onSubmit = formProps => {
        this.props.onSubmit(formProps);
    };

    render() {
        return (
            <div className="ui ten wide column segment">
                <form
                    id="search-form"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <div className="ui fluid icon input">
                        <Field
                            name="search"
                            component={this.renderInput}
                            label="Search"
                        />
                        <i
                            id="search-icon"
                            onClick={this.props.handleSubmit(this.onSubmit)}
                            className="circular search link icon"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'searchForm',
})(SearchBar);
