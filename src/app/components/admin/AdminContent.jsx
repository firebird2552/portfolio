import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedAdminBlogPostsdefault as BlogPosts } from "./BlogPosts";
import { ConnectedEditPost as EditPost } from "./EditPost";

export const AdminContent = () => {
  return (
    <Switch>
      <Route exact path="/admin" component="">
        <h2>Dashboard</h2>
      </Route>
      <Route exact path="/admin/users" component="">
        <h2>Users</h2>
      </Route>
      <Route exact path="/admin/blogposts" component={BlogPosts} />
      <Route exact path="/admin/blogposts/edit/:id" component={EditPost} />
      <Redirect to="/404" />
    </Switch>
  );
};
