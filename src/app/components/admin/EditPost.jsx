import React, { useState } from "react";
import { connect } from "react-redux";
import { EditComment } from "./EditComment";

import * as actions from "../../redux/actions/Post.Actions";

const EditPost = (props) => {
  const { approveComment, denyComment, deleteComment } = props;
  const [post, setPost] = useState(
    props.BlogPosts.find((post) => post.id === props.match.params.id)
  );
  const [title, setTitle] = useState(post.title);
  const [article, setArticle] = useState(post.article);

  /*const deleteComment = (commentID) => {
    console.log("comment ID:", commentID);
    let updatedComments = post.comments;
    console.log(updatedComments);
    const removeIndex = updatedComments.findIndex(
      (comment) => comment.id === commentID
    );
    console.log(removeIndex);
    removeIndex !== -1 ? updatedComments.splice(removeIndex, 1) : null;
    console.log(updatedComments);
    setPost({ ...post, comments: updatedComments });
  };*/

  return (
    <form>
      <section className="titleInputSection">
        <label htmlFor="titleInput">Title: </label>
        <input
          type="text"
          name="titleInput"
          id="titleInput"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </section>
      <section className="articleSection">
        <label htmlFor="articleTextArea">Article: </label>
        <textarea
          name="articleTextArea"
          id="articleTextArea"
          cols="30"
          rows="10"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
      </section>
      <section className="commentsSection">
        {post.comments
          ? post.comments.map((comment) => {
              return (
                <EditComment
                  key={comment.id}
                  postId={post.id}
                  comment={comment}
                  approve={approveComment}
                  deny={denyComment}
                  deleteComment={deleteComment}
                />
              );
            })
          : null}
      </section>
    </form>
  );
};

const mapStateToProps = ({ BlogPosts }) => ({ BlogPosts });

const mapDispatchToProps = (dispatch) => {
  return {
    approveComment: (postId, commentId) => {
      console.log("dispatching approve comment action", postId, commentId);
      dispatch(actions.approveComment(postId, commentId));
    },
    denyComment: (postId, commentId) => {
      console.log("dispatching deny comment action", postId, commentId);
      dispatch(actions.denyComment(postId, commentId));
    },

    deleteComment: (postId, commentId) => {
      console.log("dispatching delete comment action", postId, commentId);
      dispatch(actions.deleteComment);
    },
  };
};

export const ConnectedEditPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
