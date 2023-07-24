import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import './App.css';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={< LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
