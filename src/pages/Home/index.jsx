import "./style.css";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = () => {
  return (
    <>
      <Jumbotron />;
      <div className="container">
        <WorkoutTypeCard name ="Cardio"/>
        <WorkoutTypeCard name="Weights" />
      </div>  
    </>
  );
};

export default Home;
