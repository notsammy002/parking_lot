import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import ParkingSpot from './pages/ParkingSpot';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="parkingspot" element={<ParkingSpot />} />
      </Routes>
    </div>
  );
}

export default App;
