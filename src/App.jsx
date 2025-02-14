import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs';
import Academic from './pages/Academic';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Ejournal from './pages/E-Journal';
import Faculties from './pages/Faculties';
import Admission from './pages/Admission';
import Campus from './Components/Gallery/Campus';
import EventsImg from './Components/Gallery/Events';
import  FacultiesImg from './Components/Gallery/Faculties';
import LabImg from './Components/Gallery/Lab';
import LibraryImg from './Components/Gallery/Library';
import SportsImg from './Components/Gallery/Sports';
import CeremonyImg from './Components/Gallery/Ceremony';

function App() {
 
  

  return (
    <>
    {/* <div className="sticky top-0 z-30 bg-white shadow-md ">
       <Nav2  text_color={"text-[#1C315E]"}/>
     </div>

     <Nav /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/academic" element={<Academic/>} />
        <Route path="/programs" element={<Academic/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/journal" element={<Ejournal/>} />
        <Route path="/faculty" element={<Faculties/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route path="/campusimg" element={<Campus/>} />
        <Route path="/ceremoniesimg" element={<CeremonyImg/>} />
        <Route path="/eventsimg" element={<EventsImg/>} />
        <Route path="/facultiesimg" element={<FacultiesImg/>} />
        <Route path="/labimg" element={<LabImg/>} />
        <Route path="/libraryimg" element={<LibraryImg/>} />
        <Route path="/sportsimg" element={<SportsImg/>} />
       
      </Routes>
    </Router>
     
    </>
  )
}

export default App
