import react from "react";
import backgroundImage from "./assets/ChatGPT Image Jun 6, 2026, 12_03_11 AM.png";
import linkedin from "./assets/linkedin.jpeg";
import insta from "./assets/insta.jpeg";
import mail from "./assets/mail.png";
import githubIcon from "./assets/github.png";

export default function Home() {
  return (
    <div
      className="bg-cover h-screen w-screen bg-no-repeat bg-center snap-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        id="navbar"
        className="flex justify-between items-center px-[2.86vw] py-[1.43vw]"
      >
        <div
          id="logo"
          className="h-[3.57vw] w-[15vw] text-[1.71vw] font-semibold text-white flex justify-center items-center rounded-[0.71vw] transition-colors duration-300 ease-in-out hover:bg-[#2b459a50] cursor-pointer"
        >
          Akhilesh Sude
        </div>
        <nav
          id="nav"
          className="flex justify-center items-center gap-[1.43vw] m-[1.43vw] text-[1.2vw]"
        >
          <a
            href="."
            target=""
            className="no-underline text-white py-[0.71vw] px-[1.43vw] rounded-[0.36vw] transition-colors duration-300 ease-in-out hover:text-[yellow] hover:bg-[#2b459a50]"
          >
            Home
          </a>
          <a
            href="#page2"
            target=""
            className="no-underline text-white py-[0.71vw] px-[1.43vw] rounded-[0.36vw] transition-colors duration-300 ease-in-out hover:text-[yellow] hover:bg-[#2b459a50]"
          >
            Skills
          </a>
          <a
            href="#page3"
            target=""
            className="no-underline text-white py-[0.71vw] px-[1.43vw] rounded-[0.36vw] transition-colors duration-300 ease-in-out hover:text-[yellow] hover:bg-[#2b459a50]"
          >
            Services
          </a>
          <a
            href="#page4"
            target=""
            className="no-underline text-white py-[0.71vw] px-[1.43vw] rounded-[0.36vw] transition-colors duration-300 ease-in-out hover:text-[yellow] hover:bg-[#2b459a50]"
          >
            Projects
          </a>
          <a
            href="#page5"
            target=""
            className="no-underline text-white py-[0.71vw] px-[1.43vw] rounded-[0.36vw] transition-colors duration-300 ease-in-out hover:text-[yellow] hover:bg-[#2b459a50]"
          >
            Contact
          </a>
        </nav>
        <div
          id="hireme"
          className="h-[3.57vw] w-[7.14vw] text-[1.2vw] rounded-[1.43vw] bg-[rgba(255,255,67,0.92)] font-black flex justify-center items-center mr-[1.43vw] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
        >
          Hire Me ⤴
        </div>
      </div>
      <div
        id="info"
        className="w-[97vw] h-[82.5vh] items-center grid grid-cols-3 grid-rows-2"
      >
        <div
          id="title"
          className="text-[4vw] font-black text-[#ffffff] text-left font-audiowide pl-[5.71vw]"
        >
          Front-End Developer
        </div>
        <div></div>
        <div id="handles" className="text-white ml-[2.86vw]">
          <h3 className="pl-[0.36vw] text-[1.29vw] font-semibold mb-[0.57vw]">
            Connect with me
          </h3>
          <a href="https://www.linkedin.com/in/akhilesh-sude/" target="_blank">
            <img
              src={linkedin}
              alt="linkedin"
              className="inline-block pl-[0.36vw] w-[2.86vw] h-[2.86vw] bg-transparent transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </a>
          <a href="https://www.instagram.com/akhilesh_sude/" target="_blank">
            <img
              src={insta}
              alt="instagram"
              className="inline-block pl-[0.36vw] w-[2.86vw] h-[2.86vw] bg-transparent transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </a>
          <a href="mailto:akhileshsude656@gmail.com" target="_blank">
            <img
              src={mail}
              alt="gmail"
              className="inline-block pl-[0.36vw] w-[2.86vw] h-[2.86vw] bg-transparent transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </a>
          <a href="https://github.com/akhileshsude" target="_blank">
            <img
              src={githubIcon}
              alt="github"
              className="inline-block pl-[0.36vw] w-[2.86vw] h-[2.86vw] bg-transparent transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </a>
        </div>
        <div
          id="intro"
          className="row-start-2 row-end-3 col-start-1 col-end-3 w-[38.8vw] text-white pl-[5.71vw]"
        >
          <h1 className="text-[2.14vw] font-bold mb-[0.57vw]">
            Hi, I'm Akhilesh Sude
          </h1>
          <h4 className="font-mono font-light text-[1vw] leading-relaxed">
            A Frontend Developer who loves creating bright, responsive, and
            user-friendly websites. I enjoy solving problems and turning ideas
            into smooth, interactive experiences using modern web technologies.
          </h4>
        </div>
        <div
          id="title2"
          className="w-[32.01vw] row-start-2 row-end-3 col-start-3 col-end-auto text-[3vw] font-black text-[#ffffff] font-audiowide ml-[2.86vw]"
        >
          AI Automation Engineer
        </div>
      </div>
    </div>
  );
}
