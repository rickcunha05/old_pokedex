import React from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

import backgroundImage from "./pattern.png";

function App() {
  return (
    <div className="App" style={{background: `url(${backgroundImage})`}}>
     <NavBar />
     <div className="container">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />
			</Routes>

		</BrowserRouter>
      
     </div>
    </div>    

  );
}

export default App;
