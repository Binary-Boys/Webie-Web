import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Get in <span className="text-[#EEAF08]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Need a project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#202020]/50 backdrop-blur-lg rounded-2xl p-8 border border-[#EEAF08]/20">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#EEAF08]" />
                <span className="text-gray-300">vipindas233@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#EEAF08]" />
                <div className="flex flex-col">
                  <span className="text-gray-300">+91 9562845383</span>
                  <span className="text-gray-300">+91 8129725007</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#EEAF08]" />
                <span className="text-gray-300">Kerala, India</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://wa.me/9562845383" className="text-gray-300 hover:text-[#EEAF08] transition-colors">
                  Whatsapp
                </a>
                <a href="#" className="text-gray-300 hover:text-[#EEAF08] transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-[#202020]/50 border border-[#EEAF08]/20 text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EEAF08] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-[#202020]/50 border border-[#EEAF08]/20 text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EEAF08] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#202020]/50 border border-[#EEAF08]/20 text-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EEAF08] focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#202020] bg-[#EEAF08] hover:bg-[#EEAF08]/90 transition-colors"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;