import "./style.css";
import Jumbotron from "../../components/Jumbotron";
import WorkoutTypeCard from "../../components/WorkoutTypeCard";

const Home = () => {
  return (
    <>
      <Jumbotron />;
      <div className="container-fluid ml-50 row row-cols-2 row-cols-md-2 g-5 d-flex justify-content-center">
        <div className="workCard ">
          <div className="col h-100">
            <WorkoutTypeCard name="Cardio" image= "cardio.jpg"/>
          </div>
        </div>
        <div className=" workCard ">
          <WorkoutTypeCard name="Weights" image= "weights.webp"/>
        </div>
      </div>
    </>
  );
};

export default Home;
