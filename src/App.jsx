import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./utils/api";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";
import Workout from "./pages/Workout";
import ContactForm from "./pages/ContactForm";

import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState();
  const [workout, setWorkout] = useState({
    name: "biceps-curl",
    instructions:
      "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation. Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",

    difficulty: "intermediate",
    image: "./public/images/cardio/bike.webp",
  });

  const navigate = useNavigate();

  const updateWorkouts = async (query, images) => {
    console.log("updateWorkouts Started!");
    console.log(query);
    let workouts = await api.getExercises(query);
    workouts.forEach((w, index) => {
      w.image = images[index];
    });
    setWorkouts(workouts);
    navigate("/workouts");
    console.log("updateWorkouts Finished!");
  };

  return (
    <>
      <Navbar />
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
          element={<Workouts workouts={workouts} />}
        />
        <Route exact path="/workout" element={<Workout workout={workout} />} />
        <Route exact path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer updateWorkouts={updateWorkouts} />
    </>
  );
}

export default App;
