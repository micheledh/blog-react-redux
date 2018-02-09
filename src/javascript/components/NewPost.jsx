import React, {Component} from 'react';
import {connect} from 'react-redux';
import {openNewPost} from '../actions/actions';

import style from '../../styles/newPost.css';

class NewPost extends Component {
    openNewPostDialog = () => {
        this.props.dispatch(openNewPost())
    };

    render() {
        return (
            <button className={style.newPostButton} onClick={this.openNewPostDialog}>
                <i className="far fa-envelope"/><span className={style.textNewPostBtn}>new post</span>
            </button>
        );
    }
}

export default connect()(NewPost);
