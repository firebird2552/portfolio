import React from "react";

import { Proficiency } from "./Proficiency";

let proficiencies = [
  {
    name: "HTML",
    value: 117,
  },
  {
    name: "CSS",
    value: 137,
  },
  {
    name: "JavaScript",
    value: 147,
  },
  {
    name: "React",
    value: 136,
  },
  {
    name: "Bootstrap",
    value: 173,
  },
  {
    name: "NPM",
    value: 126,
  },
  {
    name: "GIT",
    value: 150,
  },
  {
    name: "AngularJS",
    value: 153,
  },
];

export const Proficiencies = () => {
  return (
    <div id="Proficiencies">
      <header className="section-header">Proficiencies</header>
      {proficiencies.map((proficiency) => (
        <Proficiency key={proficiency.name} proficiency={proficiency} />
      ))}
    </div>
  );
};
