import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SkillsCompanies from "./components/Skills-Companies";
import Works from "./components/works/Works";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <SkillsCompanies></SkillsCompanies>
      <Works></Works>
      <Socials></Socials>
      <Contact></Contact>
    </div>
  );
}

export default App;
