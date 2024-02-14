
import "./style.css";
const Workout = ({ workout }) => {
  return (
    <div id="Workout" className="container">
      <h1 className="workout-name">{workout.name}</h1>

      <h3 className="workout-difficulty">
        Difficulty-Level : {workout.difficulty}:
      </h3>
      <div className="workout-image-container">
        <img src={workout.image} className="workout-image"></img>
      </div>
      <div>
        <p className="workout-instructions">{workout.instructions}</p>
      </div>
    </div>
  );
};

export default Workout;
