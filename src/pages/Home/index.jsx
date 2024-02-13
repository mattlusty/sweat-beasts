import "./style.css";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = ({ updateWorkouts }) => {
  return (
    <>
      <Jumbotron />;
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <WorkoutTypeCard name="Cardio" onClick={() => updateWorkouts({ type: "cardio" })} />
          </div>
        </div>
        <div className="col">
          <WorkoutTypeCard name="Weights" updateWorkouts={updateWorkouts} />
        </div>
      </div>
    </>
  );
};

export default Home;
