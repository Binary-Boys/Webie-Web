import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, label, mobile, onClick }: NavLinkProps) => {
  const baseClasses = "font-medium transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 text-base text-gray-300 hover:text-[#EEAF08] hover:bg-[#EEAF08]/10 rounded-md";
  const desktopClasses = "text-gray-300 hover:text-[#EEAF08]";

  return (
    <a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default NavLink;