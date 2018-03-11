import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderField ( field ) {
        return(
            <div className = 'form-group'>
                <label>{ field.label }</label>
                <input
                    className = 'form-control'
                    type = "text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return(
            <form>
                <Field label = 'Title' name = 'title' component = { this.renderField } />
                <Field label = 'Catgeories' name = 'tags' component = { this.renderField } />
                <Field label = 'Content' name = 'content' component = { this.renderField } />
            </form>
        )
    }
}

export default reduxForm({ form: 'PostsNewForm' })(PostNew);