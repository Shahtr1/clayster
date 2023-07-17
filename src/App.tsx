import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SkillsCompanies from "./components/Skills-Companies";
import Works from "./components/works/Works";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <SkillsCompanies></SkillsCompanies>
      <Works></Works>
      <Socials></Socials>
    </div>
  );
}

export default App;
