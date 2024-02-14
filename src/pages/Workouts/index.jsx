import { useState, useEffect } from "react";
import api from "../../utils/api";
import "./style.css";
import WorkoutCard from "../../components/WorkoutCard";

const Workouts = ({ workouts }) => {
  return (
    <div id="workouts" className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {workouts.map((w, i) => (
          <div key={i} className="col py-3">
            <WorkoutCard name={w.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
