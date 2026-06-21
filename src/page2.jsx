// Tech Stacks

import react from "react";
import bgImage from "./assets/bg.png";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.png";
import jsLogo from "./assets/js.png";
import reactLogo from "./assets/react.png";
import pythonLogo from "./assets/python.png";
import gitLogo from "./assets/git.png";
import githubLogo from "./assets/github1.png";
import n8nLogo from "./assets/n8n.png";
import splineLogo from "./assets/spline.png";

export default function Page2() {
  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-10">
        Tech Stacks
      </h1>
      <div className="flex justify-center items-center gap-10 w-[80vw] mx-auto flex-wrap mt-10">
        <img
          src={htmlLogo}
          alt="HTML"
          className="w-[10vw] h-[10vw] bg-white p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={cssLogo}
          alt="CSS"
          className="w-[10vw] h-[10vw] bg-white p-6 px-10 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={jsLogo}
          alt="JavaScript"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={reactLogo}
          alt="React"
          className="w-[10vw] h-[10vw] bg-white p-5 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={pythonLogo}
          alt="Python"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={gitLogo}
          alt="Git"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={githubLogo}
          alt="Github"
          className="w-[10vw] h-[10vw] bg-white p-6 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={n8nLogo}
          alt="n8n"
          className="w-[10vw] h-[10vw] bg-white p-6 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={splineLogo}
          alt="Spline"
          className="w-[10vw] h-[10vw] bg-white p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
}
