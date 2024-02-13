import "./style.css";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = () => {
  return (
    <>
      <Jumbotron />;
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <WorkoutTypeCard name="Cardio" />
          </div>
        </div>
        <div className="col">
          <WorkoutTypeCard name="Weights" />
        </div>
      </div>
    </>
  );
};

export default Home;
