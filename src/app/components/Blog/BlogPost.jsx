import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "../../styles/BlogPost.css";
import { Article } from "./Article";

const BlogPost = (props) => {
  console.log(props);

  let details = props.details || false;

  let isAuthenticated = false;
  let login = [];

  if (details) {
    isAuthenticated = props.auth.isAuthenticated;
    login = props.auth.login;
  }
  const today = Date();

  console.log("Details: ", details);
  const { post, ModifyLikedPosts } = props;
  const { likedPosts } = props.Users.Users[0];
  const HandleLikeClick = (event) => {
    event.preventDefault();
    ModifyLikedPosts(post.id);
  };

  return (
    <div>
      <div id="post">
        <header className="post-title">
          {!props.match ? (
            <NavLink to={`blog/post/${post.title}`}>{post.title}</NavLink>
          ) : (
            post.title
          )}
        </header>
        <section id="post-article">
          <Article article={post.article} title={post.title} />
        </section>
        <section className="details-bar">
          <section className="post-author">{post.author}</section>
          <section className="post-date">{post.date}</section>
          <section className="post-likes">
            <a
              href=""
              onClick={(e) => {
                ModifyLikedPosts(e, post.id);
              }}
              className="post-like-link"
            >
              <span className="post-like-heart">
                {likedPosts
                  ? likedPosts.includes(post.id)
                    ? "\u2665"
                    : "\u2661"
                  : null}
              </span>
              <span className="post-like-count">{post.likes}</span>
            </a>
          </section>
        </section>
      </div>
      {details ? (
        <section>
          <header id="comments-header">Comments</header>
          {isAuthenticated() ? (
            <form>
              <header>Submit Comment</header>
              <section className="newCommentAuthor">
                Author: {props.Users.Users[0].username}
                <section>
                  <input
                    type="checkbox"
                    name="annoymousCheckbox"
                    id="annoymousCheckbox"
                  />
                  <label htmlFor="annoymousCheckbox">
                    {" "}
                    Comment annoymously
                  </label>
                </section>
                <section className="newCommentDate">Date: {today}</section>
                <section className="newCommentText">
                  <label htmlFor="newCommentTextBox">Comment: </label>
                  <textarea />
                </section>
                <section className="newCommentButtonBar">
                  <section className="newCommentSubmitButton">
                    <a href="" onClick={(e) => e.preventDefault()}>
                      Submit
                    </a>
                  </section>
                  <section className="newCommentCancelButton">
                    <a href="" onClick={(e) => e.preventDefault()}>
                      Cancel
                    </a>
                  </section>
                </section>
              </section>
            </form>
          ) : (
            <button onClick={login}>Login</button>
          )}
          {post.comments
            ? post.comments.map((comment) => {
                return (
                  <section key={comment.id} className="comment">
                    <div className="comment-author">{comment.author}</div>
                    <div className="comment-date">{comment.date}</div>
                    <div className="comment-text">{comment.comment}</div>
                  </section>
                );
              })
            : null}
        </section>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ Users }) => {
  return {
    Users,
  };
};

export const ConnectedBlogPost = connect(mapStateToProps)(BlogPost);
