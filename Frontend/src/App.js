import './App.css';
import React from 'react';
import {
  Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import Navbar from './pages/navbar/navbar';
import Dashboard from './pages/dashboard/dashboard';
import Team from './pages/team/team';
import Events from './pages/events/events';
import Workshops from './pages/workshops/workshops';
import Accomodation from './pages/accomodation/accomodation';
import Sponsors from './pages/sponsors/sponsors';
import EventDescription from './pages/eventDescription/eventDescription';
import WorkshopRegistration from './pages/workshopRegistration/workshopRegistration';
import Registration from './pages/Registration/Registration';

function Test() {
  return <h1 style={{ color: '#123a54' }}>testing page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/eventdescription" element={<EventDescription />} />
        <Route path="/workshopRegistration" element={<WorkshopRegistration />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
