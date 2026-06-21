import React from "react";
import ReactDOM from "react-dom/client";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx";

const p1 = ReactDOM.createRoot(document.getElementById("page1"));
const p2 = ReactDOM.createRoot(document.getElementById("page2"));
const p3 = ReactDOM.createRoot(document.getElementById("page3"));

p1.render(<Page1 />);
p2.render(<Page2 />);
p3.render(<Page3 />);
