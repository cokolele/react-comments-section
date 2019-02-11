const LOAD_INITIAL = "rc/comments/LOAD_INITIAL";
const LOAD_MORE = "rcs/comments/LOAD_MORE";
const CREATE = "rcs/comments/CREATE";
const UPDATE = "rcs/comments/UPDATE";
const REMOVE = "rcs/comments/REMOVE";

// Reducer
export default function reducer(state, action) {
    switch (action.type) {
        case LOAD_INITIAL:
            return {
                ...state,
                comments: action.comments,
                has_more: action.has_more
            };
        case LOAD_MORE:
            return {
                ...state,
                comments: [...state.comments, ...action.comments],
                has_more: action.has_more
            };
        case CREATE:
            return {
                ...state,
                comments: [...state.comments, action.comment],
            };
        case UPDATE:
            let updatedComments = [];
            state.comments.forEach(previousComment => {
                if (previousComment.id == action.comment.id)
                updatedComments.push(action.comment);
            else
                updatedComments.push(previousComment);
            });
            return {
                ...state,
                comments: updatedComments,
            }
        case REMOVE:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.comment.id),
            }
        default: 
            return state;
    }
}

// Action Creators
export function loadInitialComments(comments, has_more) {
    return { type: LOAD_INITIAL, comments, has_more };
}

export function loadMoreComments(comments, has_more) {
    return { type: LOAD_MORE, comments, has_more};
}

export function createComment(comment) {
    return { type: CREATE, comment };
}

export function updateComment(comment) {
    return { type: UPDATE, comment };
}

export function removeComment(comment) {
    return { type: REMOVE, comment };
}