// Services

export default function Page3() {
  return(
    <div className="bg-[url('/src/assets/bg.png')] bg-cover h-screen w-screen bg-no-repeat bg-center snap-start flex flex-col justify-center">
      <h1 className="text-[3vw] text-white font-bold flex justify-center py-10">
        Services
      </h1>
      <div className="flex justify-center items-center gap-20 w-[80vw] mx-auto flex-wrap mt-10">
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a]  flex flex-col justify-center  items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img src="src/assets/web-dev.png" alt="Website Development" className="rounded-3xl w-[20vw] h-[40vw]" />
        </div>
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a] rounded-3xl flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img src="src/assets/web-redes.png" alt="Automation" className="rounded-3xl  w-[20vw] h-[40vw]" />
        </div>
        <div className="w-[20vw] h-[40vw] bg-[#1a1a1a] rounded-3xl flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out hover:scale-105">
          <img src="src/assets/ai-auto.png" alt="AI Solutions" className="rounded-3xl   w-[20vw] h-[40vw]" />
        </div>
      </div>
    </div>
  )
};