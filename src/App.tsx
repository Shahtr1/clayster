import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SkillsCompanies from "./components/Skills-Companies";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <SkillsCompanies></SkillsCompanies>
      <Works></Works>
    </div>
  );
}

export default App;
