import React from 'react';
import { CheckCircle, Headphones, Briefcase, DollarSign } from 'lucide-react';

const ServiceFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Left Text Section - Made more responsive */}
        <div className="lg:w-2/5 w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <div className="w-full">
              <span className="text-blue-500 font-medium mb-2 block text-sm sm:text-base">
                Best Offer For You
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Do More, In Less Time!
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base max-w-sm">
                Send Reminders To Your Debtors In Just A Few Clicks. Simply Set-Up And Automate Follow-Ups To Get Paid More Quickly.
              </p>
              <button className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-center sm:justify-start gap-2 hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Discover All Service
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full text-blue-600 flex items-center justify-center">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Features Grid - Responsive grid layout */}
        <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Certified Platform */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-lg hover:shadow-md transition-shadow">
            <div className="mb-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
              Certified Platform
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Certification with plan and assessments
            </p>
          </div>

          {/* 24/7 Service */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-lg hover:shadow-md transition-shadow">
            <div className="mb-3">
              <Headphones className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
              24/7 Service
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Service that is available at every time and every day.
            </p>
          </div>

          {/* 12+ Years Experience */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-lg hover:shadow-md transition-shadow">
            <div className="mb-3">
              <Briefcase className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
              12+ Years Experience
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              9+ years experience in accounting service
            </p>
          </div>

          {/* High Value, Low Price */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-lg hover:shadow-md transition-shadow">
            <div className="mb-3">
              <DollarSign className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
              High Value, Low Price
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Low Cost With Premium Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;