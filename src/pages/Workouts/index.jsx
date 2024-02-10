import { useState, useEffect } from "react";
import api from "../../utils/api";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard";

const Workouts = ({ type, muscle }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const updateWorkouts = async () => {
      let workouts = await api.getExercises({ type: "cardio" });
      setWorkouts(workouts);
    };
    updateWorkouts();
  }, []);

  return (
    <div id="workouts" className="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {workouts.map((w) => (
          <div class="col py-3">
            <WorkoutCard name={w.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
