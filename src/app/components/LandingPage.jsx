import React from "react";

import "../styles/LandingPageStyle.css";

import { Proficiencies } from "./LandingPage/Proficiencies/Proficiencies";
import { RecentProjects } from "./projects/RecentProjects";
import { RecentBlogPosts } from "./Blog/RecentBlogPosts";

export const LandingPage = () => {
  return (
    <div id="LandingPage">
      <RecentProjects />
      <Proficiencies />
      <RecentBlogPosts />
    </div>
  );
};
