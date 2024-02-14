import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../utils/api";
import MuscleCard from "../../components/MuscleCard";

const muscles = [
  { name: "abdominals", image: "abdominals.jpeg" },
  { name: "abductors", image: "abductors.jpeg" },
  { name: "adductors", image: "adductors.webp" },
  { name: "biceps", image: "biceps.webp" },
  { name: "calves", image: "calves.jpeg" },
  { name: "chest", image: "chest.jpeg" },
  { name: "forearms", image: "forearms.webp" },
  { name: "glutes", image: "glutes.jpeg" },
  { name: "hamstring", image: "hamstring.png" },
  { name: "lats", image: "lats.webp" },
  { name: "lower_back", image: "lower_back.webp" },
  { name: "middle_back", image: "middle_back.jpeg" },
  { name: "neck", image: "neck.jpeg" },
  { name: "quadriceps", image: "quadriceps.png" },
  { name: "traps", image: "traps.jpeg" },
  { name: "triceps", image: "triceps.jpeg" },
];

const weightsImages = [
  "weights/beast.webp",
  "weights/pose-f.jpeg",
  "weights/biceps.webp",
  "weights/curls-f.jpeg",
  "weights/curls.webp",
  "weights/dumbells.jpeg",
  "weights/flex-f.jpeg",
  "weights/hench-f.webp",
  "weights/press.jpeg",
  "weights/squat-f.jpeg",
];

const Muscles = ({ updateWorkouts }) => {
  const onMuscleSelect = (name) => {
    updateWorkouts({ type: "strength", muscle: name }, weightsImages);
  };

  return (
    <div id="Muscles" className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {muscles.map((m) => (
          <div key={m.name} className="col py-3" onClick={() => onMuscleSelect(m.name)}>
            <MuscleCard muscle={m} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muscles;
