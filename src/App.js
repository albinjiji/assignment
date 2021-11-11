import React from "react";
import "./app.scss";
import AppFeatures from "./components/App features/AppFeatures";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Landing />
      <AppFeatures />
    </div>
  );
}

export default App;
