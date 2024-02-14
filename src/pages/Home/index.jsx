import "./style.css";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = ({ updateWorkouts }) => {
  return (
    <>
      <Jumbotron />;
      <div className="container-fluid ml-50 row row-cols-2 row-cols-md-2 g-5 d-flex justify-content-center">
        <div className="workCard ">
          <div className="col h-100" onClick={() => updateWorkouts({ type: "cardio" })}>
            <WorkoutTypeCard name="Cardio" image="cardio.jpg" />
          </div>
        </div>
        <div className=" workCard ">
          <Link to="/weights">
            <WorkoutTypeCard name="Weights" image="weights.webp" updateWorkouts={updateWorkouts} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
