import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../utils/api";
import MuscleCard from "../../components/MuscleCard";

const muscles = [
  { name: "abdominals", image: "/images/muscles/abdominals.jpeg" },
  { name: "abductors", image: "/images/muscles/abductors.jpeg" },
  { name: "adductors", image: "/images/muscles/adductors.webp" },
  { name: "biceps", image: "/images/muscles/biceps.webp" },
  { name: "calves", image: "/images/muscles/calves.jpeg" },
  { name: "chest", image: "/images/muscles/chest.jpeg" },
  { name: "forearms", image: "/images/muscles/forearms.webp" },
  { name: "glutes", image: "/images/muscles/glutes.jpeg" },
  { name: "hamstring", image: "/images/muscles/hamstring.png" },
  { name: "lats", image: "/images/muscles/lats.webp" },
  { name: "lower_back", image: "/images/muscles/lower_back.webp" },
  { name: "middle_back", image: "/images/muscles/middle_back.jpeg" },
  { name: "neck", image: "/images/muscles/neck.jpeg" },
  { name: "quadriceps", image: "/images/muscles/quadriceps.png" },
  { name: "traps", image: "/images/muscles/traps.jpeg" },
  { name: "triceps", image: "/images/muscles/triceps.jpeg" },
];

const weightsImages = [
  "/images/weights/beast.webp",
  "/images/weights/pose-f.jpeg",
  "/images/weights/biceps.webp",
  "/images/weights/curls-f.jpeg",
  "/images/weights/curls.webp",
  "/images/weights/dumbells.jpeg",
  "/images/weights/flex-f.jpeg",
  "/images/weights/hench-f.webp",
  "/images/weights/press.jpeg",
  "/images/weights/squat-f.jpeg",
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
