import "./style.css";

const WorkoutCard = ({ name, image }) => {
  return (
    <div id="WorkoutCard" className="card">
      <img src={"./public/images/" + image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;
