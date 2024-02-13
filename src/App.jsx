import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";

// import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/cardio" element={<Cardio />} /> */}
        <Route exact path="/weights" element={<Muscles />} />
        <Route exact path="/workouts" element={<Workouts />} />
        {/* <Route exact path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
