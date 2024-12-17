import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import NavLink from './NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Projects', 'About', 'Updates', 'Contact'];

  return (
    <header className="fixed w-full bg-[#202020]/95 backdrop-blur-sm border-b border-[#EEAF08]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-[#EEAF08]" />
            <span className="ml-2 text-xl font-bold text-white">Webie</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#202020]/95 border-b border-[#EEAF08]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                label={item}
                mobile
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;