import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./utils/api";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";
import ContactForm from "./pages/ContactForm";

import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState();
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
      <NavBar updateWorkouts={updateWorkouts}/>
      <div id="main" className="p-3 px-md-5">
        <Routes>
          <Route exact path="/" element={<Home updateWorkouts={updateWorkouts} />} />
          <Route exact path="/weights" element={<Muscles updateWorkouts={updateWorkouts} />} />
          <Route exact path="/workouts" element={<Workouts workouts={workouts} />} />
          <Route exact path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <Footer updateWorkouts={updateWorkouts} />
    </>
  );
}

export default App;
