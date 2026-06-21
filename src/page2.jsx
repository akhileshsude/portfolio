// Tech Stacks

import react from "react";

export default function Page2() {
  return (
    <div className="bg-[url('/src/assets/bg.png')] bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center">
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-10">
        Tech Stacks
      </h1>
      <div className="flex justify-center items-center gap-10 w-[80vw] mx-auto flex-wrap mt-10">
        <img
          src="src/assets/html.png"
          alt="HTML"
          className="w-[10vw] h-[10vw] bg-white p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/css.png"
          alt="CSS"
          className="w-[10vw] h-[10vw] bg-white p-6 px-10 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/js.png"
          alt="JavaScript"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/react.png"
          alt="React"
          className="w-[10vw] h-[10vw] bg-white p-5 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/python.png"
          alt="Python"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/git.png"
          alt="Git"
          className="w-[10vw] h-[10vw] bg-white p-4 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/github1.png"
          alt="Github"
          className="w-[10vw] h-[10vw] bg-white p-6 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/n8n.png"
          alt="n8n"
          className="w-[10vw] h-[10vw] bg-white p-6 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <img
          src="src/assets/spline.png"
          alt="Spline"
          className="w-[10vw] h-[10vw] bg-white p-2 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
}
