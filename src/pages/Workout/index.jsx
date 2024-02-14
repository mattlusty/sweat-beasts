import { useState } from "react";

const Workout = ({ workout }) => {
  return (
    <div id="workouts" className="container-fluid">
      <div className="card">
        <img src={workout.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{workout.name}</p>
          <p className="card-text">{workout.difficulty}</p>
          <p className="card-text">{workout.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Workout;
