import React from "react";

import "../../styles/BlogPost.css";
import { Article } from "./Article";

export const BlogPost = ({ post, likedPosts, ModifyLikedPosts }) => {
  const HandleLikeClick = (event) => {
    event.preventDefault();
    ModifyLikedPosts(post.id);
  };

  return (
    <div id="post">
      <header className="post-title">{post.title}</header>
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
              {likedPosts.includes(post.id) ? "\u2665" : "\u2661"}
            </span>
            <span className="post-like-count">{post.likes}</span>
          </a>
        </section>
      </section>
    </div>
  );
};
