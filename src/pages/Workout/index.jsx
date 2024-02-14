import "./style.css";

const Workout = ({ workout }) => {
  return (
    <div id="Workout" className="card">
      <img
        src={"./public/images/" + image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default Workout;
