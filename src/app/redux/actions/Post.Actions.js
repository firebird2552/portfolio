export const APPROVE_COMMENT = "APPROVE_COMMENT"
export const DENY_COMMENT = "DENY_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const approveComment = (postId, commentId) => {
    return {
        type: APPROVE_COMMENT, payload: { postId, commentId }
    }
}

export const denyComment = (postId, commentId) => {
    return {
        type: DENY_COMMENT, payload: { postId, commentId }
    }
}

export const deleteComment = (postId, commentId) => {
    return {
        type: DELETE_COMMENT, payload: {

            postId, commentId
        }
    }
}
