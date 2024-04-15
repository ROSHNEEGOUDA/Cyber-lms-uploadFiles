import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardContent from './components/Dashboard';
import Layout from './layout';
import HomePage from './components/Live';
import LivePage from './components/Liveroom';
import Home from './components/Module';
import Profile from './components/Profile';
import Auth from './auth/testpage';

function App() {
  return (
    
    <Router>
      <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/Dashboard" element={<Layout><DashboardContent/></Layout>} />
            <Route path="/liveclass" element={<Layout><HomePage/></Layout>} />
            <Route path="/Liveroom/:roomId" element={<Layout><LivePage/></Layout>} />
            <Route path="/module" element={<Layout><Home/></Layout>} />
            <Route path="/profile" element={<Layout><Profile/></Layout>} />
            
            {/* Define your routes here */}

          </Routes>
    </Router>
  );
}

export default App;
