import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = "Hello! I'm interested in your industrial oils and lubricants. Could you please provide more information?";
    const whatsappNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Shree Enterprises | Get in Touch for Quality Idustry Oils</title>
        <meta name="description" content="Contact Shree Enterprises for premium vehicle engine oils. Get expert advice on helmet-grade quality lubricants for your vehicles. Phone, email, and location details." />
        <meta name="keywords" content="contact Shree Enterprises, engine oil supplier, automotive lubricants, quality, customer support, Tapukara" />
      </Helmet>

      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for Industry Oils
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Khasra No.260 Naya Bazar Tapukara Bhiwadi 301707
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePhoneClick('+919314002929')}
                          className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full transition-colors"
                          title="Call Now"
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleWhatsAppClick('+919314002929')}
                          className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-gray-700 font-medium">+91 93140 02929</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handlePhoneClick('+919928743929')}
                          className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-full transition-colors"
                          title="Call Now"
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleWhatsAppClick('+919928743929')}
                          className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-gray-700 font-medium">+91 99287 43929</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:singhamar979@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      singhamar979@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us on Map</h3>
      <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7644891234567!2d76.8288193!3d28.1089554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA2JzMyLjIiTiA3NsKwNDknNDMuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shree Enterprises Location - Mirae Asset Sharekhan"
        ></iframe>
      </div>
      <div className="mt-2">
        <a
          href="https://www.google.com/maps/search/Mirae+Asset+Sharekhan/@28.1089554,76.8288193,17z/data=!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          View on Google Maps →
        </a>
      </div>
    </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;