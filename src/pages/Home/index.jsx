import "./style.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = ({ updateWorkouts }) => {
  return (
    <>
      <Jumbotron />

      <div className="row row-cols-2 d-flex justify-content-center">
        <div className="col" onClick={() => updateWorkouts({ type: "cardio" })}>
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
