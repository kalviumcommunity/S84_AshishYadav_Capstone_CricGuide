import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Learn from './pages/Learn';
import Batting from './pages/Batting';
import Bowling from './pages/Bowling';
import Fielding from './pages/Fielding';
import ContactUs from './pages/ContactUs';



import BeginnerBatting from './pages/BattingBeginner';
import IntermediateBatting from './pages/BattingIntermediate';
import ProfessionalBatting from './pages/BattingProfessional';

import BeginnerBowling from './pages/BowlingBeginner';
import IntermediateBowling from './pages/BowlingIntermediate';
import ProfessionalBowling from './pages/BowlingProfessional';

import BeginnerFielding from './pages/FieldingBeginner';
import IntermediateFielding from './pages/FieldingIntermediate';
import ProfessionalFielding from './pages/FieldingProfessional';
import About from './pages/About';
import TrainerTrainee from './pages/TrainerTrainee';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/learn" element={<Learn />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/about" element={<About />} />

<Route path="/trainer-trainee" element={<TrainerTrainee />} />
  <Route path="/learn/batting" element={<Batting />} />
  <Route path="/learn/bowling" element={<Bowling />} />
  <Route path="/learn/fielding" element={<Fielding />} />

 
  <Route path="/learn/batting/beginner" element={<BeginnerBatting />} />
  <Route path="/learn/batting/intermediate" element={<IntermediateBatting />} />
  <Route path="/learn/batting/professional" element={<ProfessionalBatting />} />


  <Route path="/learn/bowling/beginner" element={<BeginnerBowling />} />
  <Route path="/learn/bowling/intermediate" element={<IntermediateBowling />} />
  <Route path="/learn/bowling/professional" element={<ProfessionalBowling />} />

  {/* Fielding Levels */}
  <Route path="/learn/fielding/beginner" element={<BeginnerFielding />} />
  <Route path="/learn/fielding/intermediate" element={<IntermediateFielding />} />
  <Route path="/learn/fielding/professional" element={<ProfessionalFielding />} />
</Routes>

    </Router>
  );
}

export default App;
