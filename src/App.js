import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import Watched from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Watchlist></Watchlist>}></Route>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/watched" element={<Watched></Watched>}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
