import React from "react";
import { connect } from "react-redux";

import "../../styles/ProjectDetails.css";
import { Projects } from "../Projects";

const ProjectDetails = (props) => {
  console.log("props", props);
  const project = props.projects.find((project) => {
    if (project.title === props.match.params.title) {
      return project;
    }
  });

  console.log(project);
  return (
    <div>
      <header>{project.title}</header>
      <section id="project-image-carousel">
        {project.imageURLs.map((imgURL) => (
          <img key={imgURL} src={imgURL} />
        ))}
      </section>
      {project.client ? <section>{project.client}</section> : null}
      {project.startDate ? <section>{project.startDate}</section> : null}
      {project.endDate ? <section>{project.endDate}</section> : null}
      {project.description ? <section>{project.description}</section> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.Projects;
};

export const ConnectedProjectDetails = connect(mapStateToProps)(ProjectDetails);
