import { useState } from "react";
import "./style.css";
import MuscleCard from "../../components/MuscleCard";

const Muscles = ({ type, muscle }) => {
  const images = [
    ["abdominals", "abdominals.jpeg"],
    ["abductors", "abductors.jpeg"],
    ["adductors", "adductors.webp"],
    ["biceps", "biceps.webp"],
    ["calves", "calves.jpeg"],
    ["chest", "chest.jpeg"],
    ["forearms", "forearms.webp"],
    ["glutes", "glutes.jpeg"],
    ["hamstring", "hamstring.png"],
    ["lats", "lats.webp"],
    ["lower_back", "lower_back.webp"],
    ["middle_back", "middle_back.jpeg"],
    ["neck", "neck.jpeg"],
    ["quadriceps", "quadriceps.png"],
    ["traps", "traps.jpeg"],
    ["triceps", "triceps.jpeg"],
  ];

  return (
    <div id="Muscles" className="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {images.map((i) => (
          <div key={i[0]} class="col py-3">
            <MuscleCard image={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muscles;
