import "./style.css";

const MuscleCard = ({ muscle }) => {
  return (
    <div id="MuscleCard" className="card">
      <img src={"/images/muscles/" + muscle.image} className="card-img-top" alt={muscle.name} />
      <div className="card-body">
        <p className="card-text">{muscle.name}</p>
      </div>
    </div>
  );
};

export default MuscleCard;
