import React from "react";
import NavBar from "./components/layout/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <div className="App">
     <NavBar />
     <div className="container">
      <Dashboard />
     </div>
    </div>    

  );
}

export default App;
