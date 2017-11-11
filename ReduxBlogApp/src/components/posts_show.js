import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => { 
                this.context.router.push('/'); 
            });
    }

    render() {
        const { post } = this.props;

        if(!this.props.post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link className="right btn bg-info" to="/">Back To Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="right btn btn-danger pull-xs-right">
                    Delete Post
                </button>
                <h2>{post.title}</h2>
                <h4>Categories: {post.categories}</h4>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);