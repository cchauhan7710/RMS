import React from "react";

const risks = [
  { id: 1, risk: "Data Loss", likelihood: "High", impact: "Severe", mitigation: "Regular data backups and cloud redundancy" },
  { id: 2, risk: "Server Downtime", likelihood: "Medium", impact: "High", mitigation: "Use reliable hosting and monitoring tools" },
  { id: 3, risk: "Late Submission", likelihood: "High", impact: "Medium", mitigation: "Automated email reminders and deadlines" },
  { id: 4, risk: "Unauthorized Access", likelihood: "Low", impact: "Severe", mitigation: "Implement strong authentication & role-based access" },
];

const RiskDashboard = () => (
  <section id="risk" className="relative py-24 mt-20 bg-white overflow-hidden">
   
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-24 left-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-28 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>

   
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-orange-600 mb-4">
        Risk Management Dashboard
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        The dashboard below provides a structured overview of potential risks, 
        their likelihood, impact, and the corresponding mitigation strategies — 
        ensuring a proactive approach to project stability and reliability.
      </p>
    </div>

 
    <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/80 border border-orange-200 rounded-2xl shadow-xl overflow-hidden">
      <table className="min-w-full divide-y divide-orange-200">
        <thead className="bg-orange-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Risk</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Likelihood</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Impact</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Mitigation Plan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-100">
          {risks.map((r) => (
            <tr key={r.id} className="hover:bg-orange-50 transition duration-200">
              <td className="px-6 py-4 text-gray-800 font-medium">{r.risk}</td>
              <td className="px-6 py-4 text-gray-700">{r.likelihood}</td>
              <td className="px-6 py-4 text-gray-700">{r.impact}</td>
              <td className="px-6 py-4 text-gray-700">{r.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  
    <div className="max-w-4xl mx-auto mt-14 bg-orange-50 border border-orange-100 rounded-2xl p-8 text-gray-700 shadow-md">
      <h3 className="text-2xl font-semibold text-orange-600 mb-4 border-l-4 border-orange-500 pl-3">
        Risk Analysis Summary
      </h3>
      <p className="leading-relaxed mb-4">
        Overall, the system’s primary risks are related to <strong>data integrity</strong> 
        and <strong>system availability</strong>. High-likelihood issues such as 
        data loss and late submission require continuous monitoring and early 
        mitigation. Implementing real-time alerts, database backups, and 
        access control measures can significantly reduce the likelihood of 
        critical disruptions.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>High Priority:</strong> Data security, backup automation, and secure authentication.</li>
        <li><strong>Medium Priority:</strong> Server reliability and system performance optimization.</li>
        <li><strong>Low Priority:</strong> Occasional unauthorized access attempts and minor submission delays.</li>
      </ul>
    </div>

    {/* Footer Text */}
    <p className="text-center text-gray-500 mt-10 max-w-2xl mx-auto">
      Each row above represents a potential project risk, its likelihood, 
      impact, and planned mitigation — forming a foundation for effective 
      risk management in software engineering.
    </p>
  </section>
);

export default RiskDashboard;
