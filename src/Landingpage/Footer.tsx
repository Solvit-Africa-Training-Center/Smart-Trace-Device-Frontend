import React, { useState } from "react";
import { MapPin, Phone, Mail, Youtube } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => {
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
    <footer className=" flex  items-center justify-between bg-slate-700 text-white py-8 pl-20 ">
      <div className="  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-30">
          {/* Left Column - Newsletter */}
          <div className="space-y-3">
            <p className="text-white text-size-sm leading-relaxed  ">
              Authoritatively simplify open-source resources via backend
              visualize business e-markets before parallel convergence optimize
              sticky and idea-sharing rather than unique solutions.
            </p>

            {/* Email Subscription */}
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                placeholder="Your Email address"
                className="flex-1 px-3 py-2 bg-white text-gray-800 text-sm rounded outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-white text-slate-700 rounded font-medium hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-7 h-7 bg-red-600 rounded-md flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                <Youtube className="w-5 h-5" />
              </div>
              <FcGoogle className="w-7 h-7" />
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div>
            <h3 className="text-size-lg font-semibold mb-4">Services</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-white text-size-sm">
                  25 Street, Kigali City Road, Rwanda
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-white text-size-sm">+250 784 127 871</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-white text-size-sm">needhelp@company.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="w-1/2">
            <h3 className="text-size-lg font-semibold mb-4">Quick Links</h3>

            <nav className="space-y-2">
              <a
                href="#"
                className="block text-white text-size-sm hover:text-blue-200 transition-colors duration-200"
              >
                Report Lost Item
              </a>
              <a
                href="#"
                className="block text-white text-size-sm hover:text-blue-200 transition-colors duration-200"
              >
                Report Found Item
              </a>
              <a
                href="#"
                className="block text-white text-size-sm hover:text-blue-200 transition-colors duration-200"
              >
                Browse Items
              </a>
              <a
                href="#"
                className="block text-white text-size-sm hover:text-blue-200 transition-colors duration-200"
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
