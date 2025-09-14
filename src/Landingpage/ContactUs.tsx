import React from "react";
import { PiOfficeChair } from "react-icons/pi";
import ReUsableInput from "../ReusableComponents/ReUsableInput";

interface ContactPageProps {}

const ContactUs: React.FC<ContactPageProps> = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section - Get In Touch */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-normal text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-gray-600 leading-relaxed">
                We are always ready to to help you and <br /> answer your
                question We are always ready to to help you and answer your
                question
              </p>
            </div>

            {/* Head Office */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 text-gray-600">
                  <PiOfficeChair />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Head Office
                </h3>
                <p className="text-gray-600">RWANDA, Kigali, Kicukiro</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-600">
                  24J3+R22, KK 15 Rd,
                  <br />
                  Kigali
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-primaryColor-400 p-9">
            <h2 className="text-2xl font-normal text-gray-900 mb-5">
              Leave Your Message
            </h2>

            <div className="space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ReUsableInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value=""
                  onChange={() => {}}
                />
                <ReUsableInput
                  type="text"
                  placeholder="Second Name"
                  name="secondName"
                  value=""
                  onChange={() => {}}
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ReUsableInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  value=""
                  onChange={() => {}}
                />
                <ReUsableInput
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value=""
                  onChange={() => {}}
                />
              </div>

              {/* Message Field */}
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-5 py-4 border-[1.4px] border-primaryBoderColor rounded-md text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="px-13 py-3 border-[1.4px] border-primaryBoderColor rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
