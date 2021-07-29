import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Project = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const HandleClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("left-arrow")) {
      console.log("Left Arrow");
      if (currentImage !== 0) {
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(project.imageURLs.length - 1);
      }
    } else if (e.target.classList.contains("right-arrow")) {
      console.log("Right Arrow");
      if (currentImage + 1 < project.imageURLs.length) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }
  };

  return (
    <div className="project">
      <header className="project-title">{project.title}</header>
      <section className="image-carousel">
        {project.imageURLs.length !== 0 ? (
          <img src={project.imageURLs[currentImage]} />
        ) : null}
        <section className="arrow-bar">
          <a
            href=""
            onClick={(event) => {
              HandleClick(event);
            }}
            className="left-arrow"
          >
            {"<"}
          </a>
          <a
            href=""
            onClick={(event) => {
              HandleClick(event);
            }}
            className="right-arrow"
          >
            {">"}
          </a>
        </section>
      </section>
      <section className="short-description">
        {project.shortDescription}
      </section>
      <section className="button-bar">
        <NavLink
          to={`/project/details/${project.title}`}
          className="view-button"
        >
          View Details
        </NavLink>
      </section>
    </div>
  );
};
