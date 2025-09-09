import { LuBadgeCheck } from "react-icons/lu";
import ChatGPT from "../assets/images/ChatGPT.png";
import ServiceCard from "../ReusableComponents/ServiceCard";
import { FaMobileAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import homei from '../assets/images/home.jpg'
import ReUsableButton from "../ReusableComponents/ReUsableButton";
import ContactUs from "./ContactUs";
export default function About() {
  return (
    <div>
      <div
        className="h-screen  flex flex-col items-center justify-center gap-10 py-20 px-4 md:px-16 lg:px-60 text-center
          text-white "
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${homei})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-xl   font-light text-white leading-tight mb-8 sm:mb-12">
          Connect Lost Gadgets With Their Rightful Owners <br />A safer way to
          report, find, and verify electronic devices.
        </p>
        {/* Button container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <ReUsableButton label="Submit Lost Items" />
          <ReUsableButton label="Submit Found Items" />
        </div>
      </div>

      {/* Device Recovery Section */}
      <div className="bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Stop Fraud, Reunite Device And Build Trust
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Digitalization has enabled our recovery platform to harness the
                power of data matching. By collecting and analyzing device
                information, we can successfully reunite owners with their lost
                electronics while preventing the sale of stolen device
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                READ MORE
              </button>
            </div>

            {/* Right side - Image and Stats */}
            <div className="order-1 lg:order-2 relative">
              {/* Delivery person image */}
              <div className="relative z-10 mb-8 lg:mb-0">
                <img
                  src={ChatGPT}
                  className="w-full max-w-sm mx-auto lg:max-w-md"
                />
              </div>

              {/* Statistics cards */}
              <div className="space-y-4 lg:absolute lg:right-0 lg:top-0 lg:space-y-6">
                {/* Report Lost Device */}
                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg min-w-[240px]">
                  <div className="text-sm font-medium mb-2">
                    REPORT LOST DEVICE
                  </div>
                  <div className="text-4xl font-bold">10 +</div>
                </div>

                {/* Report Fund Device */}
                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg min-w-[240px]">
                  <div className="text-sm font-medium mb-2">
                    REPORT FUND DEVICE
                  </div>
                  <div className="text-4xl font-bold">51 +</div>
                </div>

                {/* People that got their devices */}
                <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg min-w-[240px]">
                  <div className="text-sm font-medium mb-2">
                    PEOPLE THAT GOT THEIR DEVICES
                  </div>
                  <div className="text-4xl font-bold">42 +</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-10 px-4 sm:py-10 sm:px-6 lg:py-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-20">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <ServiceCard
              icon={<BsBook />}
              title="Report lost devices"
              description="Quickly register your lost electronic device with essential details. Our System immediately begins scanning for matched with found items in our database."
            />
            <ServiceCard
              icon={<FaMobileAlt />}
              title="Register Found Items"
              description="Found an electronic device? Report it through our simple form. We’ll automatically check against our database of lost devices and notify owners if matched."
            />
            <ServiceCard
              icon={<LuBadgeCheck />}
              title="Verify Before Purchase"
              description="Planning to buy a used device? Check its status in our secure database first to ensure you’re not purchasing stolen propert."
            />
          </div>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div className="bg-white py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-16 sm:mb-20 lg:mb-24">
            WHY WE EXIST &amp;&amp; WHAT WE AIM FOR
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image and Stats */}
            <div className="order-2 lg:order-1 relative">
              {/* Main Image Composition */}
              <div className="relative">
                {/* Background images */}
                <div className="flex items-center justify-center">
                  {/* Woman in yellow coat */}
                  <div className="relative w-64 h-80 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 opacity-90"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-full h-32 bg-amber-600 rounded opacity-70"></div>
                    </div>
                  </div>

                  {/* Phone with app mockup */}
                  <div className="absolute -right-8 top-8 w-48 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
                    <div className="bg-blue-600 h-full relative">
                      {/* App interface mockup */}
                      <div className="absolute top-12 left-4 right-4">
                        <div className="bg-white rounded-lg p-3 mb-3">
                          <div className="text-xs text-gray-600 mb-1">
                            Report &amp; Find Device
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-yellow-400 rounded"></div>
                            <div className="w-8 h-8 bg-gray-400 rounded"></div>
                            <div className="w-8 h-8 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 mb-3">
                          <div className="text-xs text-gray-600 mb-1">
                            Categories
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="text-xs text-center">
                              <div className="w-6 h-6 bg-blue-400 rounded mx-auto mb-1"></div>
                              <div>Phone</div>
                            </div>
                            <div className="text-xs text-center">
                              <div className="w-6 h-6 bg-green-400 rounded mx-auto mb-1"></div>
                              <div>Laptop</div>
                            </div>
                            <div className="text-xs text-center">
                              <div className="w-6 h-6 bg-purple-400 rounded mx-auto mb-1"></div>
                              <div>Watch</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-6 left-8 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-3xl font-bold text-blue-600">12+</div>
                  <div className="text-xs text-gray-600">Years Of Service</div>
                  <div className="text-xs text-gray-600">Experience</div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Our Mission */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide a secure, reliable, and accessible digital platform
                  that helps Rwandans track, recover, and verify electronic
                  devices, reducing theft, protecting consumers, and building
                  trust in the second-hand electronics market.
                </p>
              </div>

              {/* Our Goals */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-6">
                  Our Goals
                </h3>
                <div className="space-y-4">
                  {/* Goal 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Enhance Consumer Protection
                      </h4>
                    </div>
                  </div>

                  {/* Goal 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Reduce Theft and Black-Market Activity
                      </h4>
                    </div>
                  </div>

                  {/* Goal 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Promote Rwanda's Digital Transformation
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discover More Button */}
              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      <ContactUs/>
    </div>
  );
}
