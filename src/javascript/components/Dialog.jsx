import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {closeDialog, fetchAddPost, fetchAddComment} from '../actions/actions';
import {DialogType} from '../actions/actionUtils';

import style from '../../styles/dialog.css';

class Dialog extends Component {
    static propTypes = {
        dialog: PropTypes.object
    };

    state = {
        title: '',
        titleError: false,
        text: '',
        textError: false
    };

    close = () => {
        this.props.dispatch(closeDialog());
    };

    titleChange = (event) => {
        this.setState({
            title: event.target.value,
            titleError: false
        });
    };

    textChange = (event) => {
        this.setState({
            text: event.target.value,
            textError: false
        });
    };

    createNewPost = (event) => {
        event.preventDefault();
        const {state} = this;
        if (!state.text || !state.title) {
            this.setState({
                titleError: !state.title,
                textError: !state.text
            });
        } else {
            this.props.dispatch(fetchAddPost(state.title, state.text));
            this.close();
        }
    };

    createNewComment = (event) => {
        event.preventDefault();
        const {state} = this;
        if (!state.text) {
            this.setState({
                textError: true
            });
        } else {
            this.props.dispatch(fetchAddComment(this.props.dialog.postId, this.state.text));
            this.close();
        }
    };

    render() {
        const isNewPost = this.props.dialog.type === DialogType.NEW_POST;
        const onSubmit = isNewPost ? this.createNewPost : this.createNewComment;
        return (
            <form className={style.formContainer} onSubmit={onSubmit}>
                <div className={style.inputContainer}>
                    <h3 className={style.inputTitle}>{isNewPost ? "New post" : "New comment"}</h3>
                    {isNewPost ?
                        <input
                        className={style.inputBox}
                        placeholder={'Headline'}
                        value={this.state.title}
                        onChange={this.titleChange}
                         /> : null}
                    {this.state.titleError ? <p className={style.error}>Please enter a title</p> : null}
                    <textarea
                        className={style.inputBox}
                        placeholder={'Text'}
                        value={this.state.text}
                        onChange={this.textChange}
                    />
                    {this.state.textError ? <p className={style.error}>Please enter a text</p> : null}
                    <div className={style.inputButtons}>
                        <button className={style.inputSaveBtn} type="submit">save</button>
                        <button className={style.inputCancelBtn} type="button" onClick={this.close}>cancel</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect()(Dialog);