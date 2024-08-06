import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar'; 
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/Description'; 
import Services from './components/services';
import Events from './components/events';
import Gallery from './components/gallery';
import Activities from './components/activities';
import Pooja from './components/pooja';
import Location from './components/location';
import Footer from './components/footer';
import VolunteerForm from './pages/VolunteerForm'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <WelcomeSection />
            <Services />
            <Events />
            <Gallery />
            <Activities />
            <Pooja />
            <Location />
          </>
        } />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
