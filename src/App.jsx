import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cardio" element={<Cardio  />} />
          <Route exact path="/weights" element={<Weights />} />
          <Route exact path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App
