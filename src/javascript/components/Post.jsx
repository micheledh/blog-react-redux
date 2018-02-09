import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchDeletePost, openNewComment} from '../actions/actions';

import style from '../../styles/post.css';

class Posts extends Component {
    static propTypes = {
        data: PropTypes.any,
        id: PropTypes.number,
        dispatch: PropTypes.func,
        isRed: PropTypes.bool
    };

    state = {
        isOpen: false
    };

    openPost = () => {
        this.setState({
            isOpen: true
        });
    };

    deleteIt = (event) => {
        event.stopPropagation();
        this.props.dispatch(fetchDeletePost(this.props.id));
    };

    addComment = (event) => {
        event.stopPropagation();
        this.props.dispatch(openNewComment(this.props.id));
    };

    renderComments = (postData, backgroundColor) => {
        if (this.state.isOpen && postData.comments) {
            return (
                <div className={style.commentDiv}>
                    {postData.comments.map(comment => {
                        return <p className={`${style.commentText} ${backgroundColor}`} key={comment.id}>{comment.text}</p>;
                    })}
                </div>
            );
        }
        return null;
    };

    render() {
        const {props} = this;
        const postData = props.data.get(props.id);
        const backgroundColor = props.isRed ? style.red : style.green;
        return (
            <div className={style.postContainer}>
                <div className={style.container}>
                    <div className={`${style.dateDiv} ${backgroundColor}`}>
                        <p className={style.dateDay}>{postData.date.toDateString().slice(8,10)+'.'}</p>
                        <p className={style.dateMonth}>{postData.date.toDateString().slice(4,7).toUpperCase()}</p>
                    </div>
                    <div className={`${style.postDiv} ${backgroundColor}`}>
                        <div className={style.postHeadline} onClick={this.openPost}>
                            <h2 className={style.postTitle}>{postData.title}</h2>
                            <div>
                                <button className={style.deleteButton} onClick={this.deleteIt}>
                                    <i className="fas fa-times"> </i>
                                </button>
                                <button className={style.addCommentButton} onClick={this.addComment}>
                                    <i className="fas fa-comment-alt"> </i>
                                </button>
                            </div>
                        </div>
                        {this.state.isOpen ? <p className={style.postText}>{postData.text}</p> : null}
                        </div>
                </div>
                {this.renderComments(postData, backgroundColor)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(Posts);
