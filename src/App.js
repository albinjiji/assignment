import React from "react";
import Gallery from "./components/Gallery/Gallery";
import { Landing } from "./components/Landing/Landing";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Landing />
      </div>
    </div>
  );
}

export default App;
