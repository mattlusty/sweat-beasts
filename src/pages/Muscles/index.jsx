import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../utils/api";
import MuscleCard from "../../components/MuscleCard";

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

const Muscles = ({ type, muscle }) => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  const handleMuscleSelect = (image) => {
    console.log(image);
    const updateWorkouts = async () => {
      let workouts = await api.getExercises({ type: "strength", muscle });
      setWorkouts(workouts);
      navigate("/workouts");
    };
    updateWorkouts();
  };

  return (
    <div id="Muscles" className="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {images.map((i) => (
          <div key={i[0]} class="col py-3" onClick={() => handleMuscleSelect(i)}>
            <MuscleCard image={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muscles;
