import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.js"
import Sidebar from './Components/Pages/Sidebar.js';
import Dashboard from './Components/Pages/Dashboard.js';
import PieChart from './Components/Graph/PieChart.js';
import Card from './Components/Pages/Card.js';
import Form from './Components/Pages/Form.js';
import Table from './Components/Pages/Table.js';


const App = () => {
  return (
    <div>
      <Home/>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/card" element={<Card />} />
          <Route path="/table" element={<Table />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;