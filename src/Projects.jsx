// Projects
import { useState } from "react";
import bgImage from "./assets/bg.png";
import BestWork from "./ProjectList.jsx";
import { Websites, AIAutomation } from "./ProjectList.jsx";
import ProjectCarousel from "./template.jsx";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("best");

  const tabs = {
    best: BestWork,
    websites: Websites,
    ai: AIAutomation,
  };

  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center items-center gap-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-20 w-[80vw] mx-auto flex-wrap mt-5 text-white">
        <button
          onClick={() => setActiveTab("best")}
          className={`border-blue-900 border rounded-2xl p-4 w-[15vw] ${
            activeTab === "best" ? "bg-blue-900" : ""
          }`}
        >
          {" "}
          ☆ Best Work
        </button>
        <button
          onClick={() => setActiveTab("websites")}
          className={`border-blue-900 border rounded-2xl p-4 w-[15vw] ${
            activeTab === "websites" ? "bg-blue-900" : ""
          }`}
        >
          {" "}
          🌐 Website
        </button>
        <button
          onClick={() => setActiveTab("ai")}
          className={`border-blue-900 border rounded-2xl p-4 w-[15vw] ${
            activeTab === "ai" ? "bg-blue-900" : ""
          }`}
        >
          {" "}
          🤖 AI Automation
        </button>
      </div>
      <div className="proj h-[70vh] w-[80vw] flex items-center justify-center p-4 border-blue-900 rounded-2xl border">
        <ProjectCarousel key={[activeTab]} projects={tabs[activeTab]} />
      </div>
    </div>
  );
}
