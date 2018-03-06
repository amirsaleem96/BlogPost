import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestComponent extends Component {
    render() {
        return(
            <div>{this.props.author}</div>
        )
    }
}

function mapStateToProps ( state ) {
    return state.author;
}

export default connect(mapStateToProps)(TestComponent);