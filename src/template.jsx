import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function ProjectCarousel({ projects = [] }) {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    if (!projects.length) return;
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (!projects.length) return;
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    setCurrent(0);
  }, [projects]);

  useEffect(() => {
    if (!projects.length) return;
    const interval = setInterval(() => {
      nextProject();
    }, 6000);

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <div className="w-full h-full flex flex-col justify-between text-white">
      {/* PROJECT CONTENT */}
      <div className="flex-1 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[4fr_6fr] gap-12 w-full h-full items-center"
          >
            {/* LEFT SIDE */}
            <div className="h-full flex flex-col justify-center">
              {/* Counter */}
              <p className="text-yellow-500 text-xl mb-6">
                {String(current + 1).padStart(2, "0")} /<span className="text-gray-300">{" "}
                {String(projects.length).padStart(2, "0")}</span>
              </p>

              {/* Fixed Title Height */}
              <div className="h-30">
                <h2 className="text-5xl font-bold leading-tight">
                  {projects[current]?.title || "No project available"}
                </h2>
              </div>

              {/* Fixed Description Height */}
              <div className="h-25 mt-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {projects[current]?.description || "Please add project data."}
                </p>
              </div>

              {/* Fixed Tech Area */}
              <div className="h-10 flex flex-wrap gap-3 mt-4">
                {(projects[current]?.tech || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl border border-blue-800 bg-blue-950/20 flex flex-col justify-center items-center text-sm transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl">
                  Live Demo
                </button>

                <button className="border border-blue-800 hover:border-blue-500 px-8 py-3 rounded-xl">
                  GitHub
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="h-[50vh] flex items-center justify-center">
              <div className="w-full h-full overflow-hidden rounded-3xl border border-blue-900">
                <img
                  src={
                    projects[current]?.image ||
                    "https://via.placeholder.com/800x600"
                  }
                  alt={projects[current]?.title || "No project image"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION */}
      <div className="h-17.5 flex items-center justify-between">
        <button
          onClick={prevProject}
          className="text-gray-300 hover:text-blue-400 transition"
        >
          ← Previous
        </button>

        {/* DOTS */}
        <div className="flex gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-blue-500 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextProject}
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Next →
        </button>
      </div>

      {/* PROGRESS BAR */}
      <motion.div
        key={current}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 6,
          ease: "linear",
        }}
        className="h-0.5 bg-blue-500"
      />
    </div>
  );
}

