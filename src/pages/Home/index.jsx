import "./style.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const cardioImages = [
  "cardio/bike.webp",
  "cardio/dumbell-f.jpeg",
  "cardio/push.webp",
  "cardio/pushup-f.webp ",
  "cardio/ropes.jpeg ",
  "cardio/run.jpeg ",
  "cardio/situp-f.webp ",
  "cardio/swim.jpeg ",
  "cardio/tread-f.jpeg ",
  "cardio/tread-f2.webp",
];

const Home = ({ updateWorkouts }) => {
  return (
    <>
      <Jumbotron />

      <div className="row row-cols-2 d-flex justify-content-center">
        <div className="col" onClick={() => updateWorkouts({ type: "cardio" }, cardioImages)}>
          <WorkoutTypeCard name="Cardio" image="cardio.jpg" />
        </div>
        <Link to="/weights" className="col">
          <WorkoutTypeCard name="Weights" image="weights.webp" updateWorkouts={updateWorkouts} />
        </Link>
      </div>
    </>
  );
};

export default Home;
