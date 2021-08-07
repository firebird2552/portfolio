import React from "react";
import { NavLink } from "react-router-dom";

export const Post = ({ post }) => {
  console.log("Post", post);
  return (
    <div>
      <section>{post.title}</section>
      <section>{post.author}</section>
      <section>
        <NavLink to={`/admin/blogposts/edit/${post.id}`}>Edit</NavLink>
        <button>Delete</button>
      </section>
    </div>
  );
};
