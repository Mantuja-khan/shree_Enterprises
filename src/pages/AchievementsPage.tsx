import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, FileText, Handshake, X } from 'lucide-react';
import logo from "../assets/logo.webp"
import honda from "../assets/honda.png"
import posco from "../assets/posco.png"
import revent from "../assets/revent.png"
import krn from "../assets/krn.png"
import jtekt from "../assets/jtekt.png"
import ikun from "../assets/ikun.png"
import wanfeng from "../assets/wanfeng.png"
import championdestributor_award from '../assets/champion_destributor_award_2017.jpg'
import allrounder_award_2018 from "../assets/allrounder_award_2018.jpg"
import appreciate_award_2023 from "../assets/appreciate_award_2023.jpg"
import appreciate_award_2024 from "../assets/ppreciation_award_2023_24.jpg"
import certificate_of_appreciation from "../assets/certificate_of_appcreciation.jpg"
import channel_partner_2022 from "../assets/channel_parner_2022.jpg"
import kixx_channel_award from "../assets/channel_award.jpg"
import award_2023 from "../assets/award_2023.jpg"
import tii_logo from "../assets/tii_logo.png"
import ls from "../assets/ls.png"
import jk_cement from "../assets/jk-logo.png"
import amba_group from '../assets/amba-group.avif'
import sbf_ispak from "../assets/sbf_ispak.png"
import certificate_1 from "../assets/certificate_1.jpg"
import certificate_2 from "../assets/certificate_2.jpg"
import award_4 from "../assets/4th_award.jpg"


const AchievementsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  const certificates = [
    {
      id: 1,
      name: 'KIXX CHAMPION DESTRIBUTOR AWARD 2017',
      description: '',
      image: championdestributor_award
    },
    {
      id: 2,
      name: 'KIXX ALL ROUNDER AWARD 2018',
      description: 'Meeting American Petroleum Institute performance standards',
      image: allrounder_award_2018
    },
    {
      id: 3,
      name: 'KIXX APPRECIATE AWARD 2018',
      description: 'Commitment to environmental protection and sustainable practices',
      image: appreciate_award_2023
    }
  ];

  const clients = [
    {
      name: 'Honda',
      image: honda
    },
    {
      name: 'POSCO',
      image: posco
    },
    {
      name: 'KRN ',
      image: krn
    },
    {
      name: 'REVENT',
      image: revent
    },
    {
      name: 'WANFENG AUTO WHEEL',
      image: wanfeng
    },
    {
      name: 'IKUNI',
      image: ikun
    },
    {
      name: 'JTEKT GROUP',
      image: jtekt
    },
    {
      name: 'TII INDIA GROUP',
      image: tii_logo
    },
    {
      name: 'LS CABEL',
      image: ls
    },
    {
      name: 'JK CEMENT',
      image: jk_cement
    },
    {
      name: 'AMBA GROUP',
      image: amba_group
    },
    {
      name: 'AMBA GROUP',
      image: sbf_ispak
    },
  ];

  const openModal = (imageSrc: string, imageName: string) => {
    setSelectedImage({ src: imageSrc, name: imageName });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Achievements - Shree Enterprises | Certifications & Awards </title>
        <meta name="description" content="Discover our achievements, certifications, valuable clients, and channel partners. Shree Enterprises maintains helmet-grade quality standards in all operations." />
        <meta name="keywords" content="achievements, certifications, awards, clients, partners, helmet quality, ISO certification, API standards" />
      </Helmet>
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Recognition, certifications, and partnerships that demonstrate our commitment to excellence
          </p>
        </div>
      </div>

      {/* Certificates Section */}
    <section className="py-16 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <FileText className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certificates</h2>
      </div>
      <p className="text-lg text-gray-600">
        Our certifications demonstrate our commitment to quality and industry standards
      </p>
    </div>

    {/* Certificates grid - Optimized for mobile with 2 columns */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
      {[ 
        ...certificates,
        { id: 4, name: "KIXX Best performaer2021", image: award_4 },
        { id: 5, name: "CERTIFICATE OF APPRECIATION 2017", image: certificate_of_appreciation },
        { id: 6, name: " KIXX CHANNEL PARTNER AWARD 2022", image: channel_partner_2022 },
        { id: 7, name: "KIXX CHANNEL EXCELLANCE AWARD", image: kixx_channel_award },
        { id: 8, name: "KIXX CHANNEL PARTNER OF 2023", image: award_2023},
        { id: 9, name: "SMART TECHNOLOGY FOR SMART PERFORMANCE", image: certificate_1},
        { id: 10, name: "DISTRIBUTOR FOR INDUSTRIAL RANGE", image: certificate_2}
      ].map((certificate) => (
        <div
          key={certificate.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div 
            className="relative bg-gray-50 cursor-pointer group overflow-hidden"
            onClick={() => openModal(certificate.image, certificate.name)}
          >
            {/* Image Container with smaller aspect ratio for mobile */}
            <div className="aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-medium">
                Click to view
              </span>
            </div>
          </div>
          <div className="p-2 sm:p-3 md:p-4 text-center">
            <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 leading-tight line-clamp-2 sm:line-clamp-3">
              {certificate.name}
            </h3>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom-right "and more..." */}
    <span className="absolute bottom-4 right-4 text-lg md:text-xl font-bold text-blue-500">
      and more...
    </span>
  </div>
</section>


      {/* Modal for viewing images - Enhanced for mobile */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
            
            {/* Image Container */}
            <div className="flex items-center justify-center p-2 sm:p-6">
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain"
              />
            </div>
            
            {/* Image Title */}
            <div className="p-3 sm:p-4 border-t bg-gray-50">
              <h3 className="text-base sm:text-lg font-semibold text-center text-gray-900">
                {selectedImage.name}
              </h3>
            </div>
          </div>
        </div>
      )}
      
      {/* Valuable Clients Section */}
     <section className="py-12 bg-gray-50 relative">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <div className="flex items-center justify-center space-x-2 mb-3">
        <Users className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Valuable Clients</h2>
      </div>
      <p className="text-base text-gray-600">
        Trusted by leading automotive manufacturers and companies across India
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center p-2 bg-gray-50">
            <img
              src={client.image}
              alt={client.name}
              className="w-[90px] h-[90px] object-contain md:w-[110px] md:h-[110px]"
            />
          </div>
          <div className="p-2">
            <h3 className="font-semibold text-gray-900 text-center text-xs md:text-sm">
              {client.name}
            </h3>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom-right "and more..." */}
  <span className="absolute bottom-4 right-4 text-lg md:text-xl font-bold text-blue-500">
      and more...
    </span>
  </div>
</section>


      {/* Channel Partners Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Handshake className="h-7 w-7 text-orange-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Channel Partners</h2>
            </div>
            <p className="text-base text-gray-600">
              Trusted partnerships with GS Caltex India Pvt. Ltd.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - smaller height */}
              <div className="lg:w-1/3 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Channel Partners"
                  className="w-40 h-50 object-contain"
                />
              </div>

              {/* Content Section - reduced */}
              <div className="lg:w-2/3 p-6">
                <h3 className="text-xl md:text-1xl font-bold text-gray-900 mb-4">
                  GS Caltex India Pvt Ltd. CIN: U51109MH2010PTC1995610
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✅A Wing, # 1011-12, 10th Floor
                    Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri (East),
                    Mumbai – 400 093</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Awards & Recognition</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Quality Award 2023</h3>
              <p className="text-gray-600">Recognized for maintaining highest quality standards in automotive lubricants</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Choice Award 2022</h3>
              <p className="text-gray-600">Voted as the most preferred lubricant brand by customers</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <Handshake className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Distribution 2021</h3>
              <p className="text-gray-600">Outstanding performance in supply chain and distribution network</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsPage;