// Tech Stacks

import React, { useEffect, useState } from "react";
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
import homeIcon from "./assets/home.png";

export default function Skills() {
  const [showHomeButton, setShowHomeButton] = useState(false);

  useEffect(() => {
    const updateButtonVisibility = () => {
      setShowHomeButton(window.scrollY >= window.innerHeight);
    };

    updateButtonVisibility();
    window.addEventListener("scroll", updateButtonVisibility);
    return () => window.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-10">
        Skills
      </h1>
      <div className="grid grid-cols-2 justify-center items-center gap-10 text-white px-10">
        <div>
          <h2 className="text-[2vw] text-white font-bold flex justify-center py-10">
            Technologies
          </h2>
          <div className="flex justify-center items-center gap-5 mx-auto flex-wrap mt-10">
            <img
              src={htmlLogo}
              alt="HTML"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={cssLogo}
              alt="CSS"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={jsLogo}
              alt="JavaScript"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={reactLogo}
              alt="React"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={pythonLogo}
              alt="Python"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={gitLogo}
              alt="Git"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={githubLogo}
              alt="Github"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-3 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={n8nLogo}
              alt="n8n"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img
              src={splineLogo}
              alt="Spline"
              className="w-[5vw] h-[5vw] bg-[#dbdbdb] p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[2vw] text-white font-bold flex justify-center py-10">
            Capabilities
          </h2>
          <ul className="text-[1vw] text-white flex flex-col justify-center items-center gap-4">
            <li>🔗 API Integration</li>
            <li>🤖 AI Chatbots and Assistants</li>
            <li>🎨 Interactive 3D experiences</li>
            <li>⚡ Automation and Workflow Optimization</li>
            <li>📊 Custom Dashboards</li>
            <li>📱 Responsive Web Applications</li>
          </ul>
        </div>
      </div>
      {showHomeButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-blue-900 p-4 text-white shadow-lg hover:bg-blue-500 hover:scale-115 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition-all duration-200"
          aria-label="Go to home"
        >
          <img src={homeIcon} alt="Home" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
