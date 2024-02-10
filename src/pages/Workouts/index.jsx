import { useState, useEffect } from "react";
import api from "../../utils/api";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard";

const Workouts = ({ type, muscle }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log("Workouts Page Component - Mounted!");
    const doThing = async () => {
      let workouts = await api.getExercises({ type: "cardio" });
      console.log("Workouts data recieved!");
      console.log(workouts);
      setWorkouts(workouts);
    };
    console.log("Do thing");
    doThing();
    return () => {
      console.log("Workouts Page Component - Unmounted!");
    };
  }, []);

  console.log("Workouts Page Component - Rendering");

  console.log("workouts");
  console.log(workouts);

  // return (
  //   <div id="workouts" className="container">
  //     <div className="row row-cols-5">
  //       <div class="col">
  //         {workouts.map(
  //           (w) => "hello"
  //           // <WorkoutCard name={w.name} />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div id="workouts" class="container-fluid text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  );
};

export default Workouts;
