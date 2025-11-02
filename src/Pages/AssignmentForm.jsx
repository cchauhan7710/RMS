import React, { useState } from "react";

const AssignmentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.file) {
      setError("⚠️ Please fill all fields before submitting!");
      return;
    }

    setError("");
    console.log("Submitted Data:", formData);
    setSubmitted(true);

    setFormData({
      title: "",
      description: "",
      file: null,
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="assign" className="py-20 bg-white relative overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-16 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

   
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Assignment Submission
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto backdrop-blur-xl bg-white/80 border border-orange-200 rounded-2xl shadow-xl p-8"
      >
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2">
            Assignment Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-4 py-2 outline-none transition"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-4 py-2 outline-none transition"
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2">
            Upload File
          </label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-lg px-4 py-2 outline-none transition"
          />
        </div>

   
        {error && <p className="text-orange-600 text-center mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Submit Assignment
        </button>

        {submitted && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Assignment submitted successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default AssignmentForm;
