import {createPost, createComment} from '../actions/actionUtils';

// Mock initial fetch to get posts

const initStore = new Map();

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const firstPost = createPost(
    'Post headline',
    loremIpsum,
    new Date(2017, 7, 4),
    [createComment('Comment comment')]
);
initStore.set(firstPost.id, firstPost);

const secondPost = createPost(
    'Post headline',
    loremIpsum,
    new Date(2017, 8, 28),
    []
);
initStore.set(secondPost.id, secondPost);

const thirdPost = createPost(
    'Post headline',
    loremIpsum,
    new Date(2017, 9, 9),
    []
);
initStore.set(thirdPost.id, thirdPost);

const fourthPost = createPost(
    'Post headline',
    loremIpsum,
    new Date(2017, 9, 12),
    [createComment('Comment comment'), createComment('Comment comment comment comment')]
);
initStore.set(fourthPost.id, fourthPost);

const fifthPost = createPost(
    'Post headline',
    loremIpsum,
    new Date(2017, 9, 13),
    []
);
initStore.set(fifthPost.id, fifthPost);

export default initStore;
