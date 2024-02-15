import "./style.css";
const Workout = ({ workout }) => {
  return (
    <div id="Workout" className="container">
      <h1 className="workout-name">{workout.name}</h1>

      <div className="workout-difficulty">
        Difficulty-level : <span>{workout.difficulty}</span>
      </div>
      <div className="workout-image-container">
        <img src={workout.image} className="workout-image"></img>
      </div>
      <div className="workout-instructions">
        <h2 className="p-1">Instructions:</h2>
        <p>{workout.instructions}</p>
      </div>
    </div>
  );
};

export default Workout;
