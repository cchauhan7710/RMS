import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="relative py-24 bg-white text-center overflow-hidden"
  >

    <div className="absolute inset-0 -z-10">
      <div className="absolute top-24 left-20 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-28 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>


    <h2 className="text-4xl font-bold text-orange-600 mb-6">
      Contact & Team Information
    </h2>

   
    <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-100 rounded-2xl p-10 shadow-md hover:shadow-lg transition duration-300">
      <p className="text-gray-700 text-lg leading-relaxed">
        <span className="block mb-4">
          Project by:{""}
          <strong className="text-orange-600"> Rahul chauhan</strong>
        </span>
        <span className="block mb-2 font-medium">
          Department of Computer Science & Engineering
        </span>
        <span className="block mb-2">PCTE College, Ludhiana</span>
        <span className="block text-gray-600 mt-4">
          For queries or collaborations, contact us at:{" "}
          <a
            href="mailto:teaminnovators@example.com"
            className="text-orange-600 font-semibold hover:underline"
          >
            Rahul@gmail.com
          </a>
        </span>
      </p>
    </div>

    {/* Footer Note */}
    <p className="text-gray-500 mt-8 text-sm">
      Designed with ❤️ using React & Tailwind CSS
    </p>
  </section>
);

export default Contact;
