import React from "react";
import { Project } from "./Project";

const projects = [
  {
    name: "meow",
    imageURLs: [
      "https://www.placecage.com/200/300",
      "https://www.placecage.com/g/200/300",
      "https://www.placecage.com/c/200/300",
    ],
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora, illum voluptatem amet veniam nisi rem at maiores sit in dolore itaque natus laborum officiis nostrum eligendi, ad dicta a?",
  },
];

export const RecentProjects = () => {
  return (
    <div>
      <header className="section-header">Recent Projects</header>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
      <section></section>
    </div>
  );
};
