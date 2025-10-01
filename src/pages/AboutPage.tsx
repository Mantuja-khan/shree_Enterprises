import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Award, Target } from 'lucide-react';
import about_image from "../assets/home_about.jpg"



const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Shree Enterprises | Leading Industrial Oil</title>
        <meta name="description" content="Learn about Shree Enterprises, a leading manufacturer of premium indistrial oils with over 20 years of experience and  quality standards." />
        <meta name="keywords" content="about Shree Enterprises indistrial oil manufacturer, automotive lubricants, helmet quality, company history, vision mission" />
      </Helmet>

      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shree Enterprises</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading the customer with quality, innovation, and customer satisfaction
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2013, Shree Enterprises has grown from a small regional distributor 
                to one of India's most trusted names in industrial oil . Our journey began 
                with a simple vision: to provide superior quality industrial oils that protect and 
                enhance industries performance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have built strong relationships with leading oil suppliers 
                and developed our own range of premium products that meet the highest industry 
                standards. Our commitment to quality has earned us the trust of thousands of 
                customers across our Area.
              </p>
              <p className="text-lg text-gray-600">
                Today, Shree Enterprises serves a diverse client including individual industrial 
                owners, commercial fleet operators, and industrial clients, all united by their 
                trust in our products and services.
              </p>
            </div>
            <div>
              <img
                src={about_image}
                alt="Shree Enterprises facility"
                className="w-full h-82 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">18+</h3>
              <p className="text-gray-600">Years of Experiance</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Quality Products</p>
            </div>
            <div className="text-center">
              <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Quality Assurance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                To be the most trusted and preferred brand in Industrial Oils, setting industry standards for quality, performance, and customer service. We envision a future where every industrial operation runs smoothly with our oils, ensuring optimal performance, reliability, and equipment longevity.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
               To provide superior quality industrial oils and lubricants along with exceptional customer service that exceeds expectations. We are committed to continuous innovation, sustainable practices, and building long-term relationships with our industrial clients, partners, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product undergoes rigorous testing 
                to ensure it meets our high standards and customer expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, understand, 
                and deliver solutions that exceed their expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and improve our products and services to stay 
                ahead of industry trends and meet evolving customer needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;