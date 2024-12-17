import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            About <span className="text-[#EEAF08]">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a team of passionate developers dedicated to creating innovative solutions
            that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-[#202020]/50 rounded-lg border border-[#EEAF08]/20">
            <Users className="h-12 w-12 text-[#EEAF08] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
            <p className="text-gray-300">
              Expert developers, designers, and problem solvers working together to deliver
              excellence.
            </p>
          </div>

          <div className="text-center p-6 bg-[#202020]/50 rounded-lg border border-[#EEAF08]/20">
            <Target className="h-12 w-12 text-[#EEAF08] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To transform complex technical challenges into elegant, efficient solutions
              that drive success.
            </p>
          </div>

          <div className="text-center p-6 bg-[#202020]/50 rounded-lg border border-[#EEAF08]/20">
            <Award className="h-12 w-12 text-[#EEAF08] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
            <p className="text-gray-300">
              Innovation, quality, and customer satisfaction are at the heart of
              everything we do.
            </p>
          </div>
        </div>

        <div className="bg-[#202020]/50 rounded-2xl p-8 md:p-12 border border-[#EEAF08]/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What Our <span className="text-[#EEAF08]">Clients Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-[#202020] p-6 rounded-lg border border-[#EEAF08]/20">
              <p className="text-gray-300 mb-4">
                "The team delivered an exceptional solution that exceeded our expectations.
                Their expertise and professionalism made the entire process smooth and efficient."
              </p>
            </blockquote>
            <blockquote className="bg-[#202020] p-6 rounded-lg border border-[#EEAF08]/20">
              <p className="text-gray-300 mb-4">
                "Working with this team was a game-changer for our project. Their attention
                to detail and innovative approach helped us achieve our goals faster."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;