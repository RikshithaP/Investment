import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Orders from "./routes/Orders";
import Holdings from "./routes/Holdings";
import Positions from "./routes/Positions";
import Bids from "./routes/Bids";
import Funds from "./routes/Funds";


function App() {
  useEffect(() => {
    fetch('/').then(res => res.text()).then(data => console.log(data));
}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </Router>

  );
}

export default App;