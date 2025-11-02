import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import RiskDashboard from "./Pages/RiskDashboard"
import AssignmentForm from "./Pages/AssignmentForm";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Home />
      <RiskDashboard />
      <AssignmentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
