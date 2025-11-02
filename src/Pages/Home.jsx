import React from "react";

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-white via-orange-50 to-white text-gray-800 px-6 overflow-hidden pt-28"
  >
   
    <div className="absolute -z-10 inset-0 overflow-hidden">
      <div className="absolute top-32 left-24 w-72 h-72 bg-orange-300/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-28 w-md h-112 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute inset-0 bg-linear-to-br from-orange-100/30 via-transparent to-transparent"></div>
    </div>

 
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-snug">
        <span className="text-gray-900">Risk Management Planning for</span>{" "}
        <span className="text-orange-600">Online Assignment Submission Tool</span>
      </h1>

      <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg leading-relaxed">
        A structured and proactive approach to identifying, assessing, and mitigating
        risks in building a secure, efficient, and reliable online assignment
        submission system — ensuring academic integrity and seamless operation.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <a
          href="#risk"
          className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-transform transform hover:scale-105 shadow-md"
        >
          View Risks
        </a>
        <a
          href="#assign"
          className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-transform transform hover:scale-105 shadow-md"
        >
          Submit Assignment
        </a>
      </div>
    </div>


    <div className="mt-16 text-center">
      <div className="w-32 h-1 bg-orange-500 mx-auto mb-3 rounded-full"></div>
      <p className="text-gray-500 text-sm tracking-wide uppercase">
        Empowering Smart, Secure & Reliable Academic Systems
      </p>
    </div>
  </section>
);

export default Home;
