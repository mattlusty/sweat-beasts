import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Navbar from "./components/NavBar";
// import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/cardio" element={<Cardio />} /> */}
        {/* <Route exact path="/weights" element={<Weights />} /> */}
        <Route exact path="/workouts" element={<Workouts />} />
        {/* <Route exact path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
