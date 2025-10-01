import React from "react";
import baseoilImg from "../assets/base_oil.webp"; // Replace with your actual image path

const Baseoil: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <img
            src={baseoilImg}
            alt="Baseoil"
            className="w-72 h-72 object-contain rounded-xl shadow-md bg-black"
          />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Baseoil Products
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Our Baseoil range is designed to meet the demanding requirements of
            modern lubricants, ensuring optimal performance across automotive,
            industrial, and marine applications. These high-quality base oils
            provide a solid foundation for premium lubricants with excellent
            thermal stability, oxidation resistance, and extended service life.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Baseoil Specifications
        </h2>
        <table className="w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">API Category</th>
              <th className="px-4 py-3 text-left">Viscosity</th>
              <th className="px-4 py-3 text-left">Applications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3">Group II</td>
              <td className="px-4 py-3">150N</td>
              <td className="px-4 py-3">Automotive / Industrial lubricants</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group II</td>
              <td className="px-4 py-3">220N</td>
              <td className="px-4 py-3">Automotive / Industrial lubricants</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group II</td>
              <td className="px-4 py-3">600N</td>
              <td className="px-4 py-3">
                Automotive / Industrial / Marine lubricants
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group III</td>
              <td className="px-4 py-3">2 cSt (60N)</td>
              <td className="px-4 py-3">Process Oil / Transformer Oil</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group III</td>
              <td className="px-4 py-3">4 cSt (100N)</td>
              <td className="px-4 py-3">
                High quality Automotive / Industrial lubricants
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group III</td>
              <td className="px-4 py-3">6 cSt (150N)</td>
              <td className="px-4 py-3">
                High quality Automotive / Industrial lubricants
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">Group III</td>
              <td className="px-4 py-3">8 cSt (250N)</td>
              <td className="px-4 py-3">
                High quality Industrial lubricants
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Key Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Excellent oxidation and thermal stability.</li>
          <li>Extended lubricant service life.</li>
          <li>High viscosity index for better performance.</li>
          <li>Improved cleanliness and reduced deposits.</li>
          <li>Suitable for diverse automotive and industrial needs.</li>
        </ul>
      </div>

      {/* Extra Section - Kixx Lubo */}
      <div className="mt-12 p-6 bg-blue-50 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">Kixx Lubo</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Kixx Lubo</strong> is our premium-grade base oil product,
          engineered with advanced refining technologies. It delivers superior
          lubrication performance for demanding automotive and industrial
          applications, ensuring longer oil drain intervals, reduced friction,
          and enhanced energy efficiency.
        </p>
      </div>
    </div>
  );
};

export default Baseoil;
