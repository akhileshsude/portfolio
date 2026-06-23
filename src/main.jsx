import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";

const p1 = ReactDOM.createRoot(document.getElementById("page1"));
const p2 = ReactDOM.createRoot(document.getElementById("page2"));
const p3 = ReactDOM.createRoot(document.getElementById("page3"));
const p4 = ReactDOM.createRoot(document.getElementById("page4"));
const p5 = ReactDOM.createRoot(document.getElementById("page5"));
    
p1.render(<Home />);
p2.render(<Skills />);
p3.render(<Services />);
p4.render(<Projects />);
p5.render(<About />);
