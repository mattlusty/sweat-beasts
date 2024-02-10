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
    <div id="workouts" className="container">
      {workouts.map((w) => (
        <WorkoutCard name={w.name} />
      ))}
    </div>
  );
};

export default Workouts;
