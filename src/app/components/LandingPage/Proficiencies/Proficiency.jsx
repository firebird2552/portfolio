import React from "react";

export const Proficiency = ({ proficiency }) => {
  return (
    <div id="Proficiency">
      <header className="column">{proficiency.name}</header>
      <progress
        id="value-progress"
        className="column"
        value={proficiency.value}
        max="300"
      >
        {proficiency.value}
      </progress>
    </div>
  );
};
