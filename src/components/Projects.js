import React from "react";
export default function Projects() {
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <h2 className="text-5xl text-emerald-500 font-bold text-center">
        My Projects
      </h2>
      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                          gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                          hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://trust-exchange-beta.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="https://i.ibb.co/DkF1qhs/Screenshot-90.png"
              alt="Project 1"
              className="w-full h-full 
                                      bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://trust-exchange-beta.vercel.app/"
            >
              Trust Exchange
            </a>
          </h2>
          <p>
            This is a project built on react, node and solidity “Blockchain
            Based Voting System” is a web based online voting system primarily
            based on ethereum blockchain technology. Blockchain is a
            transparent, distributed, immutable and trustless ledger and to
            overcome the problems of the traditional voting system, blockchain
            plays a vital role in terms of security, trust and more. Here anyone
            eligible for voting can vote for their favorite candidate and they
            can see the result after the end of the election. It is fast,
            secure, and has low cost as compared to traditional voting systems.
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                          lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                          hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://dev-code-devesh.vercel.app/"
            className="w-full h-full"
          >
            <img
              src="https://i.ibb.co/yfH7062/ssssss.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://dev-code-devesh.vercel.app/"
            >
              dev code
            </a>
          </h2>
          <p>
            dev code is a dsa solving platform in react only the frontend part
            which is a user-friendly front-end platform for solving Data
            Structures and Algorithms problems, enhancing user engagement and
            learning & interactive coding environments that allow users to
            write, test, and debug their code in real time, facilitating a
            seamless learning experience.
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                          lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                          hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://xcoder45.github.io/Sorting_Visualizer/"
            className="w-full h-full"
          >
            <img
              src="https://i.ibb.co/TwGwYmD/ddd.png"
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://xcoder45.github.io/Sorting_Visualizer/"
            >
              Sorting Visualizer
            </a>
          </h2>
          <p>
            The “Sorting Visualiser” project is basically a web. development
            project which is used to visualize the sorting. algorithms and
            performs the operation of algorithms step by. step as the algorithms
            works like Bubble Sort, Selection Sort , Merge Sort etc
          </p>
        </div>
      </div>
    </section>
  );
}
