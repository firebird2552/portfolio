import React from "react";

export const EditComment = ({
  postId,
  comment,
  approve,
  deny,
  deleteComment,
}) => {
  return (
    <div>
      <p>{comment.author}</p>
      <p>{comment.comment}</p>
      <section>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteComment(postId, comment.id);
          }}
        >
          Delete
        </button>
        {!comment.approved ? (
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                approve(postId, comment.id);
              }}
            >
              Approve
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                deny(postId, comment.id);
              }}
            >
              Deny
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
};
