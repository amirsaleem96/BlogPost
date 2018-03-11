import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderField ( field ) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className = {className}>
                <label>{ field.label }</label>
                <input
                    className = 'form-control'
                    type = "text"
                    {...field.input}
                />
                <div className = 'text-help'>{ touched ? error : '' }</div>
            </div>
        )
    }

    onSubmit( values ) {

    }

    render() {

        const { handleSubmit } = this.props;

        return(
            <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                <Field label = 'Title' name = 'title' component = { this.renderField } />
                <Field label = 'Catgeories' name = 'categories' component = { this.renderField } />
                <Field label = 'Content' name = 'content' component = { this.renderField } />
                <button type = 'submit' className = 'btn btn-primary'>Save</button>
            </form>
        )
    }
}

function validate ( values ) {

    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a title!';
    }

    if(!values.categories) {
        errors.categories = 'Enter some categories';
    }

    if(!values.content) {
        errors.content = 'Enter some content please';
    }

    return errors;
}

export default reduxForm({
    validate, 
    form: 'PostsNewForm' 
})(PostNew);