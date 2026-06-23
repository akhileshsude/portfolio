// Projects

import bgImage from "./assets/bg.png";

export default function Projects() {
  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center items-center gap-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-20 w-[80vw] mx-auto flex-wrap mt-5 text-white">
        <button className=" border-blue-900 border rounded-2xl p-4 w-[15vw]"> ☆ Best Work</button>
        <button className=" border-blue-900 border rounded-2xl p-4 w-[15vw]"> 🌐 Website</button>
        <button className=" border-blue-900 border rounded-2xl p-4 w-[15vw]"> 🤖 AI Automation</button>

      </div>
      <div className="proj h-[70vh] w-[80vw] flex items-center justify-center p-4 border-blue-900 rounded-2xl border"></div>
    </div>
  );
}
