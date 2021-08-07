import React from "react";
import { connect } from "react-redux";
import { Post } from "./post";

const BlogPosts = (props) => {
  console.log("BlogPosts -> BlogPosts", props.BlogPosts);
  return (
    <div>
      {props.BlogPosts.map((post) => {
        console.log("BlogPost.map -> Post", post);
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ BlogPosts: state.BlogPosts });

const mapDispatchToProps = {};

export const ConnectedAdminBlogPostsdefault = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPosts);
