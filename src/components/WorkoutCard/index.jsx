import "./style.css";

const WorkoutCard = ({ name }) => {
  return (
    <div id="workoutCard" className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
