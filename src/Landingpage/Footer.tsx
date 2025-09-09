import React, { useState } from "react";
import { MapPin, Phone, Mail, Youtube } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribing email:", email);
      setEmail("");
      // Add your subscription logic here
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <footer className={`bg-slate-600 text-white py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Newsletter */}
          <div className="lg:col-span-1">
            <p className="text-white text-base leading-relaxed mb-6">
              Authoritatively simplify open-source resources via backend
              visualize business e-markets before parallel convergence optimize
              sticky and idea-sharing rather than unique solutions.
            </p>

            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                placeholder="Your Email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-white text-slate-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
              >
                SUBCRIBE
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-md flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                <Youtube className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xs">G</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                <span className="text-white font-bold text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Services</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white leading-relaxed">
                    25 Street, 145 City Road New Town DD14, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white">+250 784 127 871</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white">needhelp@company.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <nav className="space-y-3">
              <a
                href="#"
                className="block text-white hover:text-blue-200 transition-colors duration-200"
              >
                Report Lost Item
              </a>
              <a
                href="#"
                className="block text-white hover:text-blue-200 transition-colors duration-200"
              >
                Report Found Item
              </a>
              <a
                href="#"
                className="block text-white hover:text-blue-200 transition-colors duration-200"
              >
                Browse Items
              </a>
              <a
                href="#"
                className="block text-white hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
