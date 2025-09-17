import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import config from './config'
import Home from './Home/Home';
import Complaint from './Complaint/Complaint';
import Graph from './Graph/Graph';
import  './App.css';
import Nav from './Nav/Nav';
import Foooter from './Foooter/Foooter';
import Dashboard from './Dashboard/Dashboard';


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/complaint' element={<Complaint />} />
        <Route path='/graph' element={<Graph />} /> 
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Foooter />
    </Router>
  )
}

export default App
