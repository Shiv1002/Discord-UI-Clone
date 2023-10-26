import React from "react";
import "./App.css"
import Main from "./Main";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard"
import Friends from "./components/Dashboard/dashboard/Friends";
import Stage from "./components/Dashboard/dashboard/Stage";
import Nitro from "./components/Dashboard/dashboard/Nitro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} loader={<h1>hellp</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index path="addfriend" element={<Friends />} />
          <Route path="stage-discovery" element={<Stage />} />
          <Route path="nitro" element={<Nitro />}></Route>
        </Route>

        {/* error element */}
        <Route path="*" element={<div className="flex flex-col bg-orange-500 h-screen  text-white"> <span className="text-7xl font-semibold text-center">Error!</span><span className="text-center text-3xl">Page may no longer exist</span> </div>} />
      </Routes>

    </Router>


  );
}

{/*  */ }

export default App;
