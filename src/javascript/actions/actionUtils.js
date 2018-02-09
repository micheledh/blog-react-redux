export const ActionType = {
    GET_POSTS: 'GET_POSTS',
    ADD_COMMENT: 'ADD_COMMENT',
    ADD_POST: 'ADD_POST',
    OPEN_NEW_COMMENT: 'OPEN_NEW_COMMENT',
    OPEN_NEW_POST: 'OPEN_NEW_POST',
    CLOSE_DIALOG: 'CLOSE_DIALOG',
    DELETE_POST: 'DELETE_POST'
};

export const DialogType = {
    NEW_COMMENT: 'NEW_COMMENT',
    NEW_POST: 'NEW_POST'
};

export function createPost(title, text, date = new Date(), comments = []) {
    return {
        title,
        text,
        date,
        // A proper UUID from BE would be returned here, but there is no backend so I'm using timestamp
        id: date.getTime(),
        comments
    };
}

export function createComment(text, date = new Date()) {
    return {
        text,
        date,
        // A proper UUID from BE would be returned here, but there is no backend so I'm using timestamp
        id: date.getTime()
    };
}
