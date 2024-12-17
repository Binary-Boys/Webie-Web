import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EEAF08]/10 border border-[#EEAF08]/20 text-[#EEAF08] mb-8">
          <Rocket className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Your ideas, our passion. Let's code!</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Building the projects of <span className="text-[#EEAF08]">Tomorrow</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover innovative solutions and cutting-edge software development projects that push the boundaries of what's possible.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center px-8 py-3 border-2 border-[#EEAF08] text-base font-medium rounded-md text-[#202020] bg-[#EEAF08] hover:bg-[#EEAF08]/90 transition-colors"
        >
          Explore Projects
        </a>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;