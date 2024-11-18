import React from 'react';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navItems = ['Home', 'About Us', 'Services', 'Teams', 'Contact Us'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img 
            src="logo1.png"
            alt="TAG & COMPANY" 
            className="h-16"
          />
        </div>
        
        <div className="flex flex-wrap gap-6 sm:gap-12 justify-center mt-4 sm:mt-0">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-blue-600 text-sm sm:text-base">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-12 lg:mt-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Section with Graph */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            <img 
              src="graph1.png"
              alt="Financial Growth Graph" 
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-[2.5rem] font-bold text-[#003366] leading-tight mb-8">
              Providing the best Chartered Accountancy Services!
            </h2>
            
            <p className="text-[#1a237e] text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed">
              Welcome to TAG & Co. Chartered Accountants, your trusted 
              partner in financial excellence. Since our establishment in 
              2017, we've been committed to providing top-tier 
              accounting, financial, and advisory services to clients across 
              Hyderabad and beyond.
            </p>

            <button className="bg-[#4169E1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-3 text-sm sm:text-lg hover:bg-blue-600 transition-colors">
              Contact us now
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
