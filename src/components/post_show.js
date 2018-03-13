import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        if(!this.props.post){
            const postId = this.props.match.params.id;
            this.props.fetchPost(postId);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;
        if(!post) {
            return <div></div>
        }
        return(
            <div>
                <div className = 'text-xs-right'>
                    <button className = 'btn btn-danger' onClick ={this.onDeleteClick.bind(this)}>Delete</button>
                </div>
                <h3>{ post.title }</h3>
                <h6>Categories: { post.categories }</h6>
                <p>{post.content}</p>
                <Link className = 'btn btn-primary' to = '/'>Back</Link>
            </div>
        );
    }
}

function mapStateToProps( { posts }, ownProps ) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);