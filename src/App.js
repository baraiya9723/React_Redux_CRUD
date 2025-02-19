
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import ProfilePage from './pages/Profilepage'; 
const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/profile" element={<ProfilePage />} />  {/* Add this route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
