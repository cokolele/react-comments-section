const LOAD_INITIAL = "rcs/comments/LOAD_INITIAL",
    LOAD_MORE = "rcs/comments/LOAD_MORE",
    CREATE = "rcs/comments/CREATE",
    UPDATE = "rcs/comments/UPDATE",
    REMOVE = "rcs/comments/REMOVE";

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
            const newComment = {
                id: state.comments.length + 1,
                owner: true,
                name: action.name,
                timestamp: action.timestamp,
                text: action.text
            };
            return {
                ...state,
                comments: [newComment, ...state.comments],
            };
        case UPDATE:
            return {
                comments: state.comments.map(comment => {
                    if (comment.id == action.id)
                        comment.text = action.text;
                    return comment;
                }),
            }
        case REMOVE:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.id),
            }
        default:
            return state;
    }
}

// Action Creators
function loadInitialComments(comments, links) {
    return { type: LOAD_INITIAL, comments, links };
}

function loadMoreComments(comments, links) {
    return { type: LOAD_MORE, comments, links };
}

function createComment(name, text, timestamp) {
    return { type: CREATE, name, text, timestamp };
}

function updateComment(id, text) {
    return { type: UPDATE, id, text };
}

function removeComment(id) {
    return { type: REMOVE, id };
}

export {
    loadInitialComments,
    loadMoreComments,
    createComment,
    updateComment,
    removeComment
};