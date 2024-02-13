import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./utils/api";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";

// import Footer from './components/Footer';
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState();
  const navigate = useNavigate();

  const updateWorkouts = async (query) => {
    console.log("updateWorkouts Started!");
    let workouts = await api.getExercises(query);
    setWorkouts(workouts);
    navigate("/workouts");
    console.log("updateWorkouts Finished!");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home updateWorkouts={updateWorkouts} />} />
        <Route exact path="/weights" element={<Muscles updateWorkouts={updateWorkouts} />} />
        <Route exact path="/workouts" element={<Workouts />} />
        {/* <Route exact path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </>
  );
}

export default App;
