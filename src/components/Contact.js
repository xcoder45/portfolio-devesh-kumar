import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
      <h2 className="text-5xl font-bold text-emerald-500 text-center">
        Contact
      </h2>
      <div className="flex gap-5 justify-center my-10">
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center hover:underline"
          href="https://www.linkedin.com/in/devesh-kumar-b62465233/"
        >
          Linkedin:
          <span className="font-bold"> @devesh-kumar </span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center hover:underline"
          href="https://github.com/xcoder45"
        >
          Github:
          <span className="font-bold"> @xcoder45 </span>
        </a>
        <a
          rel="noreferrer"
          className="text-center hover:underline"
          href="mailto:deveshk05112003@gmail.com"
        >
          MailTo:
          <span className="font-bold"> deveshk05112003@gmail.com </span>
        </a>
      </div>
    </section>
  );
}
