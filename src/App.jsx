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
    console.log(query);
    let workouts = await api.getExercises(query);
    setWorkouts(workouts);
    navigate("/workouts");
    console.log("updateWorkouts Finished!");
  };

  return (
    <>
      <Navbar />
      <div id="main" className="p-3 px-md-5">
        <Routes>
          <Route exact path="/" element={<Home updateWorkouts={updateWorkouts} />} />
          <Route exact path="/weights" element={<Muscles updateWorkouts={updateWorkouts} />} />
          <Route exact path="/workouts" element={<Workouts workouts={workouts} />} />
          {/* <Route exact path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
