// Services

import bgImage from "./assets/bg.png";
import webDev from "./assets/web-dev.png";
import automation from "./assets/web-redes.png";
import aiAuto from "./assets/ai-auto.png";

export default function Page3() {
  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-10">
        Services
      </h1>
      <div className="flex justify-center items-center gap-20 w-[80vw] mx-auto flex-wrap mt-10">
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a]  flex flex-col justify-center  items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            src={webDev}
            alt="Website Development"
            className="rounded-3xl w-[20vw] h-[40vw]"
          />
        </div>
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a] rounded-3xl flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            src={automation}
            alt="Automation"
            className="rounded-3xl  w-[20vw] h-[40vw]"
          />
        </div>
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a] rounded-3xl flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            src={aiAuto}
            alt="AI Solutions"
            className="rounded-3xl   w-[20vw] h-[40vw]"
          />
        </div>
      </div>
    </div>
  );
}
