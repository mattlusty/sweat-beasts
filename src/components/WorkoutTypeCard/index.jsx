import "./style.css";

function WorkoutTypeCard({ name, image }) {
  return (
    <div id="WorkoutTypeCard" className="card rounded-4 overflow-hidden">
      <img src={image} className="" alt="Cardio" />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <h5 className="card-title text-light fs-1 fw-bold">{name}</h5>
      </div>
    </div>
  );
}

export default WorkoutTypeCard;
