import "./style.css";

const MuscleCard = ({ image }) => {
  return (
    <div id="MuscleCard" className="card">
      <img src={"./public/images/muscles/" + image[1]} className="card-img-top" alt={image[0]} />
      <div className="card-body">
        <p className="card-text">{image[0]}</p>
      </div>
    </div>
  );
};

export default MuscleCard;
