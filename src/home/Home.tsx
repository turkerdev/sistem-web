import React from "react";
import { Link } from "react-router-dom";

function App() {
  const projects = [
    {
      title: "URL Shortener",
      text: "Shorten your URLs! \n aka.turker.dev/????",
      link: "/aka",
    },
  ];

  return (
    <>
      <h1 className="text-7xl xl:text-9xl p-20 text-center bg-gradient-to-br font-semibold from-green-400 to-blue-800 bg-clip-text text-transparent">
        turker.dev
      </h1>
      <div className="flex gap-4 mx-12 xl:mx-36">
        {projects.map((project) => (
          <div
            key={project.link}
            className="rounded p-5 bg-[#313131] w-64 xl:w-72"
          >
            <p className="text-center xl:text-2xl">{project.title}</p>
            <hr className="my-2" />
            <p>{project.text}</p>
            <Link to={project.link}>
              <button className="w-full bg-[#6153CC] rounded mt-4 p-1">
                Go!
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
