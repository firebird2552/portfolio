import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ConnectedBlogPost as BlogPost } from "./BlogPost";

const PostDetails = (props) => {
  const post = props.BlogPosts.find((post) => {
    if (post.title === props.match.params.title) {
      return post;
    }
  });
  if (!post) {
    console.log(post);
    <Redirect to={props.history.goBack()} />;
    return null;
  }
  return <BlogPost post={post} details={true} auth={props.auth} />;
};

const mapStateToProps = (state) => {
  return state.BlogPosts;
};

const mapDispatchToProps = {};

export const ConnectedPostDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
