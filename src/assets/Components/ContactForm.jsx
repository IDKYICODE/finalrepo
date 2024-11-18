import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Form Section */}
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
                Fill the details and we will get back to you!
              </h1>
              <form className="flex flex-col gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium block">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 sm:p-4 rounded-lg bg-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 sm:p-4 rounded-lg bg-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium block">Contact Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your contact number"
                    className="w-full p-3 sm:p-4 rounded-lg bg-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                  />
                </div>
                <button className="bg-white text-blue-600 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition self-start text-sm sm:text-base mt-2">
                  Contact us now <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold">
                <span className="font-light">Your Partner In</span> Progress
              </h3>
              <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-blue-100">
                Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut.
              </p>
            </div>

            {/* Important Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold">Important Links</h3>
              <ul className="mt-3 sm:mt-4 space-y-2">
                <li>
                  <a href="#support" className="text-blue-100 hover:text-white hover:underline text-sm">
                    Support center
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-blue-100 hover:text-white hover:underline text-sm">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-blue-100 hover:text-white hover:underline text-sm">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#sitemap" className="text-blue-100 hover:text-white hover:underline text-sm">
                    Site map
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-bold">Contact Us</h3>
              <div className="mt-3 sm:mt-4 space-y-2">
                <p className="text-sm text-blue-100">123 456 7890</p>
                <p className="text-sm text-blue-100">123 456 7890</p>
                <p className="text-sm text-blue-100">Info@Yourcompany.Com</p>
              </div>

              {/* Social Links Section */}
              <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
                <a
                  href="#facebook"
                  className="bg-blue-500 hover:bg-blue-400 text-white p-2.5 rounded-md text-sm"
                >
                  fb
                </a>
                <a
                  href="#instagram"
                  className="bg-blue-500 hover:bg-blue-400 text-white p-2.5 rounded-md text-sm"
                >
                  ig
                </a>
                <a
                  href="#youtube"
                  className="bg-blue-500 hover:bg-blue-400 text-white p-2.5 rounded-md text-sm"
                >
                  yt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-blue-700 py-4 px-4 text-center text-xs sm:text-sm">
          <p>Copyright Your Company Name Goes Here</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;