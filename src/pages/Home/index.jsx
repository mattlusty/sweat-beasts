import "./style.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const cardioImages = [
  "/images/cardio/bike.webp",
  "/images/cardio/dumbell-f.jpeg",
  "/images/cardio/push.webp",
  "/images/cardio/pushup-f.webp ",
  "/images/cardio/ropes.jpeg ",
  "/images/cardio/run.jpeg ",
  "/images/cardio/situp-f.webp ",
  "/images/cardio/swim.jpeg ",
  "/images/cardio/tread-f.jpeg ",
  "/images/cardio/tread-f2.webp",
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
