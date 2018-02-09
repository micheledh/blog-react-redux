import initStore from '../store/initStore';
import {ActionType, createPost, createComment} from '../actions/actionUtils';

export default function data(state = initStore, action) {
    switch(action.type) {
        case ActionType.GET_POSTS:
            return action.data;
        case ActionType.ADD_POST:
            const newPost = createPost(action.title, action.text);
            const newData = new Map(state);
            newData.set(newPost.id, newPost);
            return newData;
        case ActionType.ADD_COMMENT:
            const newComment = createComment(action.text);
            const newState = new Map(state);
            const post = newState.get(action.postId);
            post.comments.push(newComment);
            newState.set(post.id, post);
            return newState;
        case ActionType.DELETE_POST:
            const newData2 = new Map(state);
            if (newData2.get(action.postId).comments.length > 0) {
                alert("This post already has some comments, you can't delete it anymore");
            } else {
                newData2.delete(action.postId);
            }
            return newData2;
        default:
            return state;
    }
}
