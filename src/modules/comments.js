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
                links: action.links
            };
        case LOAD_MORE:
            return {
                ...state,
                comments: [...state.comments, ...action.comments],
                links: action.links
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
export function loadInitialComments(comments, links) {
    return { type: LOAD_INITIAL, comments, links };
}

export function loadMoreComments(comments, links) {
    return { type: LOAD_MORE, comments, links };
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