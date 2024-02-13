import { BrowserRouter as Router, Route, Routes, useNavigation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Muscles from "./pages/Muscles";
import Workouts from "./pages/Workouts";

// import Footer from './components/Footer';
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState();
  const navigation = useNavigation();

  const updateWorkouts = async (query) => {
    let workouts = await api.getExercises(query);
    setWorkouts(workouts);
    navigation("/workouts");
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home updateWorkouts={updateWorkouts} />} />
        {/* <Route exact path="/cardio" element={<Cardio />} /> */}
        <Route exact path="/weights" element={<Muscles updateWorkouts={updateWorkouts} />} />
        <Route exact path="/workouts" element={<Workouts />} />
        {/* <Route exact path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
