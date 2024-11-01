import React from 'react';
export default function About() {
  return (
      <section
          id="about"
          className="px-10 w-full flex flex-col lg:flex-row py-20 
                     align-center bg-emerald-200 max-w-5xl mx-auto">
          <div className="flex-1">
              <img src=
"https://i.ibb.co/HC03Fyh/devvv.png"
                  alt="About"
                  className="w-full h-full bg-cover"/>
          </div>
          <div className="flex-1 flex flex-col justify-center
                          items-center gap-5 px-6">
              <div>
                  <h2 className="text-center text-emerald-500 
                                 text-5xl font-bold">
                      About Me :
                  </h2>
              </div>
              <p>
                  A Software Engineer and Developer...
              </p>
              <p>
                  I am a passionate self taught developer
                  (which is quite a subjective thing as i learnt from
                  teachers on youtube so does that really counts?
                  idk). Think of me as a creative problem solver with a love for tech, especially when it comes to bringing ideas to life with C++, JavaScript, and React.
                  Let’s connect and create something unforgettable.....
              </p>
          </div>
      </section>
  );
}
