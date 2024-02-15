import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./utils/api";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";
import Workout from "./pages/Workout";
import ContactForm from "./pages/ContactForm";
import MapLocations from "./pages/MapLocations";
import "./App.css";

const placeHolderWorkout = {
  name: "Bicep Curls",
  instructions:
    "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation. Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",
  image: "./public/images/cardio/bike.webp",
  difficulty: "intermediate",
};

function App() {
  const [workouts, setWorkouts] = useState();
  const [workout, setWorkout] = useState(placeHolderWorkout);

  const navigate = useNavigate();

  const updateWorkouts = async (query, images) => {
    let workouts = await api.getExercises(query);
    const workoutsCopy = [...workouts];
    workoutsCopy.forEach((w, index) => {
      w.image = images[index];
    });
    setWorkouts(workoutsCopy);
    navigate("/workouts");
  };

  const updateWorkout = (workout) => {
    setWorkout(workout);
    navigate("/workout");
  };

  return (
    <>
      <NavBar updateWorkouts={updateWorkouts} />
      <div id="main" className="p-3 px-md-5">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home updateWorkouts={updateWorkouts} />}
          />
          <Route
            exact
            path="/weights"
            element={<Muscles updateWorkouts={updateWorkouts} />}
          />
          <Route
            exact
            path="/workouts"
            element={
              <Workouts workouts={workouts} updateWorkout={updateWorkout} />
            }
          />
          <Route
            exact
            path="/workout"
            element={<Workout workout={workout} />}
          />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/map" element={<MapLocations />}></Route>
        </Routes>
      </div>
      <Footer updateWorkouts={updateWorkouts} />
    </>
  );
}

export default App;
