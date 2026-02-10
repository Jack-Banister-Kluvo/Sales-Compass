
import React from 'react';

interface HeaderProps {
  onNavigate: (view: 'list') => void;
}

const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="#2EA3F2" strokeWidth="2" strokeDasharray="5 5" />
    <path d="M50 5 L53 12 L47 12 Z" fill="#FF2B52" />
    <path d="M50 95 L53 88 L47 88 Z" fill="#2EA3F2" />
    <path d="M95 50 L88 53 L88 47 Z" fill="#2EA3F2" />
    <path d="M5 50 L12 53 L12 47 Z" fill="#FF2B52" />

    {/* Red Growth Arrow */}
    <path d="M25 65 L45 45 L55 55 L80 25" stroke="#FF2B52" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M65 25 L80 25 L80 40" stroke="#FF2B52" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

    {/* Blue Growth Arrow */}
    <path d="M35 75 L50 60 L60 70 L85 40" stroke="#2EA3F2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    <path d="M75 40 L85 40 L85 50" stroke="#2EA3F2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => onNavigate('list')}
      >
        <img src="/logo.png" alt="Sales Compass" className="h-10 w-auto" />
        <span className="font-bold text-xl tracking-tight uppercase text-gray-900">Sales Compass</span>
      </div>

      <div className="flex items-center space-x-8">
        <button
          onClick={() => onNavigate('list')}
          className="text-[#222222] font-medium hover:text-[#FF2B52] transition-colors border-b-2 border-[#FF2B52] pb-1"
        >
          Reports
        </button>
      </div>
    </nav>
  );
};

export default Header;
