import {ActionType} from '../actions/actionUtils';
import initStore from '../store/initStore';

// As there is no backend, fetch here are simplified, but providing right backend and updating url
// would make all this work (and also adding .then(response => response.json()).then(responseJson => dispatch(...)))
// Assuming a POST request return a json containing the post/comment object (if not, dispatch fetchGetPosts)
// DELETE would also need to dispatch fetchGetPosts, but for the sake of the exercise (because of no BE) I simply delete it from the store

export function openNewPost() {
    return {type: ActionType.OPEN_NEW_POST};
}

export function openNewComment(postId) {
    return {type: ActionType.OPEN_NEW_COMMENT, postId};
}

export function closeDialog() {
    return {type: ActionType.CLOSE_DIALOG};
}

export function addPost(title, text) {
    return {type: ActionType.ADD_POST, title, text};
}

export function fetchAddPost(title, text) {
    return function(dispatch) {
        return fetch('', {method: 'POST'}).then(response => dispatch(addPost(title, text)))
    }
}

export function getPosts() {
    return {type: ActionType.GET_POSTS, data: initStore};
}

export function fetchGetPosts() {
    return function(dispatch) {
        return fetch('', {method: 'GET'}).then(response => dispatch(getPosts()))
    }
}

export function addComment(postId, text) {
    return {type: ActionType.ADD_COMMENT, postId, text};
}

export function fetchAddComment(postId, text) {
    return function(dispatch) {
        return fetch('', {method: 'POST'}).then(response => dispatch(addComment(postId, text)))
    }
}

export function deletePost(postId) {
    return {type: ActionType.DELETE_POST, postId};
}

export function fetchDeletePost(postId, text) {
    return function(dispatch) {
        return fetch('', {method: 'DELETE'}).then(response => dispatch(deletePost(postId)))
    }
}