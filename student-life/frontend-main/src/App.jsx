import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Clubs from "./pages/clubs";
import StudyGroups from "./pages/StudyGroups";
 // <-- Import StudyGroups
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/resources" element={<Resources />} />        
        <Route path="/studygroups" element={<StudyGroups />} />      
      </Routes>
      

    </Router>
    

  );
}

export default App;
