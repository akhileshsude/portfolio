// About ME
import bgImage from "./assets/bg.png";
import me from "./assets/me.jpg";

export default function About() {
  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-6">
        About
      </h1>
      <div className=" h-[50vh] w-[90vw] mx-auto rounded-3xl flex flex-row justify-center items-center gap-4 p-4">
        <div className=" p-5 w-[50vw] rounded-3xl  flex flex-col justify-center items-center gap-2">
          <h2 className="text-[2vw] text-gray-300 font-bold flex justify-center py-5">
            Hi, I'm Akhilesh
          </h2>
          <p className="text-[1.2vw] text-gray-300 text-center">
            Computer Science student specializing in AI/ML.
          </p>
          <p className="text-[1.2vw] text-gray-300 text-center">
            I build modern web applications and AI-powered automation tools,
            combining clean design with practical solutions.
          </p>
          <p className="text-[1.2vw] text-gray-300 text-center">
            Currently looking for internships, freelance opportunities, and
            exciting collaborations.
          </p>
          <br/>
          <h3 className="text-[1.4vw] text-gray-300 font-bold"> Languages</h3>
          <p className="text-[1.2vw] text-gray-300">
            English • Hindi • Marathi
          </p>
          <br></br>
          <a href="">
            <button className="h-[7vh] w-[21vw] bg-[#0e0e0eb0] border-2 border-gray-300 rounded-3xl  flex flex-col justify-center items-center gap-4 hover:bg-[#2b459a50] transition-colors duration-300 ease-in-out">
              <p className="text-[1.2vw] text-gray-300 font-bold ">Resume ↗</p>
            </button>
          </a>
        </div>
        <div className="border-2 border-gray-300 rounded-3xl  flex flex-col justify-center items-center gap-4 mt-10">
          <img src={me} alt="me" className=" w-[20vw] rounded-3xl" />
        </div>
      </div>
      <div className="h-[30vh] bg-[#0e0e0eb0] flex flex-row justify-center items-center gap-4 p-4 mt-10">
        <div className="flex-1/3 p-10 rounded-3xl  flex flex-col justify-center items-center gap-4">
          <h1 className="text-[1.4vw] text-white font-bold ">Contact Me at</h1>
          <h1
            className="text-[1.8vw] text-white font-bold cursor:pointer "
            onClick={() =>
              (window.location.href = "mailto:akhileshsude656@gmail.com")
            }
          >
            akhileshsude656@gmail.com
          </h1>
        </div>
        <div className="flex-1/3 p-10 rounded-3xl  flex flex-col justify-center items-center gap-4">
          <p className="text-[1.2vw] text-gray-300">Projects: 10+</p>
          <p className="text-[1.2vw] text-gray-300">Technologies: 12+</p>
          <p className="text-[1.2vw] text-gray-300">AI Workflows: 10+</p>

        </div>
        <div className="flex-1/3 p-10 rounded-3xl  flex flex-col justify-center items-center gap-4">
          <a href="https://github.com/akhileshsude">
            <p className="text-[1.2vw] text-gray-300">Github ↗</p>
          </a>
          <a href="https://www.linkedin.com/in/akhilesh-sude/">
            <p className=" text-[1.2vw] text-gray-300">LinkedIn ↗</p>
          </a>
          <a href="mailto:akhileshsude656@gmail.com">
            <p className="text-[1.2vw] text-gray-300">Email ↗</p>
          </a>
        </div>
      </div>
    </div>
  );
}
