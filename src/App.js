import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sourceofincome from "./components/Sourceofincome";
import Budget from './components/Budget';
import { useState } from "react";
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/source" element={<Sourceofincome />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
