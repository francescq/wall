import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {
    renderInput({ input }) {
        return <input {...input} placeholder="type your search" type="text" />;
    }

    onSubmit = formProps => {
        this.props.onSubmit(formProps);
    };

    render() {
        return (
            <div className="ui ten wide column segment">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="ui fluid icon input">
                        <Field
                            name="search"
                            component={this.renderInput}
                            label="Search"
                        />
                        <i
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
