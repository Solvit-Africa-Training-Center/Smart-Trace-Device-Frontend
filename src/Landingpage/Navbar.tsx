import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu, X} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from '../assets/images/logo.jpeg'

interface HeaderProps {}

const Navbar: React.FC<HeaderProps> = () => {
  const [openBrowseritem, setopenBrowseritem] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  const location = useLocation();

  // Check if current path is in Submit Items dropdown
  const isSubmitItemsActive = ['/reportlostitem', '/reportfounditem'].includes(location.pathname);
  
  // Check if current path is in Browse Items dropdown
  const isBrowseItemsActive = ['/lostitem', '/founditem'].includes(location.pathname);

  // Check for individual page states
  const isHomeActive = location.pathname === '/home' || location.pathname === '/';
  const isContactActive = location.pathname === '/contact';

  // Keep dropdowns open if user is on related pages
  useEffect(() => {
    if (isSubmitItemsActive) {
      setOpen(true);
    }
    if (isBrowseItemsActive) {
      setopenBrowseritem(true);
    }
  }, [location.pathname, isSubmitItemsActive, isBrowseItemsActive]);

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmitItemsToggle = () => {
    // Only allow closing if not on an active page
    if (!isSubmitItemsActive) {
      setOpen(!open);
    }
  };

  const handleBrowseItemsToggle = () => {
    // Only allow closing if not on an active page
    if (!isBrowseItemsActive) {
      setopenBrowseritem(!openBrowseritem);
    }
  };

  return (
    <header className="w-full fixed">
      {/* Top contact bar */}
      <div className="bg-slate-500 text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-30">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">needhelp@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Tel: +250 784 127 871</span>
            </div>
          </div>

          {/* Social media icons */}
          <div className="hidden md:flex items-center space-x-10 pr-2">
            <Link to={""} className="h-4 w-4">
              <FaXTwitter />
            </Link>
            <Link to={""} className="h-4 w-4 ">
              <FaFacebookF />
            </Link>
            <Link to={"BBB"} className="h-4 w-4">
              <FaYoutube />
            </Link>
            <Link to={""} className="h-4 w-4">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className=" w-20 h-5 bg-slate-500 rounded flex items-center justify-center mr-4">
                  <img src={logo} alt="" className=" text-white" />
                </div>
              </div>
            </div>

            {/* Desktop Navigation and Login */}
            <div className="hidden lg:flex items-center space-x-12">
              <nav className="flex items-center space-x-12">
                <Link
                  to={"home"}
                  className={`font-bold text-[14px] tracking-wide transition-colors ${
                    isHomeActive
                      ? "text-blue-500"
                      : "text-slate-600 hover:text-blue-500"
                  }`}
                >
                  Home
                </Link>
                <div className="relative">
                  {/* Submit Items Trigger button */}
                  <button
                    onClick={handleSubmitItemsToggle}
                    className="text-slate-600 hover:text-slate-800 font-normal text-sm tracking-wide flex items-center"
                  >
                    <p
                      className={`hover:text-blue-500 font-bold text-[14px] tracking-wide transition-colors ${
                        isSubmitItemsActive ? "text-blue-500" : "text-slate-600"
                      }`}
                    >
                      Submit Items
                    </p>
                    <IoMdArrowDropdown
                      className={`ml-2 mt-1.5 w-5 h-5 transform transition-transform ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Submit Items Dropdown content */}
                  {open && (
                    <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                      <Link
                        to="reportlostitem"
                        className={`block px-4 py-2 text-sm hover:bg-slate-100 transition-colors ${
                          location.pathname === "/reportlostitem"
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-slate-700"
                        }`}
                      >
                        Lost Items
                      </Link>
                      <Link
                        to="reportfounditem"
                        className={`block px-4 py-2 text-sm hover:bg-slate-100 transition-colors ${
                          location.pathname === "/reportfounditem"
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-slate-700"
                        }`}
                      >
                        Found Items
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  {/* Browse Items Trigger button */}
                  <button
                    onClick={handleBrowseItemsToggle}
                    className="text-slate-600 hover:text-slate-800 font-normal text-sm tracking-wide flex items-center"
                  >
                    <p
                      className={`hover:text-blue-500 font-bold text-[14px] tracking-wide transition-colors ${
                        isBrowseItemsActive ? "text-blue-500" : "text-slate-600"
                      }`}
                    >
                      Browse Items
                    </p>
                    <IoMdArrowDropdown
                      className={`ml-2 mt-1.5 w-5 h-5 transform transition-transform ${
                        openBrowseritem ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Browse Items Dropdown content */}
                  {openBrowseritem && (
                    <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                      <Link
                        to="lostitem"
                        className={`block px-4 py-2 text-sm hover:bg-slate-100 transition-colors ${
                          location.pathname === "/lostitem"
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-slate-700"
                        }`}
                      >
                        Lost Items
                      </Link>
                      <Link
                        to="founditem"
                        className={`block px-4 py-2 text-sm hover:bg-slate-100 transition-colors ${
                          location.pathname === "/founditem"
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-slate-700"
                        }`}
                      >
                        Found Items
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to={"contact"}
                  className={`font-bold text-[14px] tracking-wide transition-colors ${
                    isContactActive
                      ? "text-blue-500"
                      : "text-slate-600 hover:text-blue-500"
                  }`}
                >
                  Contact Us
                </Link>
              </nav>

              {/* Login Button */}
              <button className="bg-slate-500 text-white px-6 py-2 font-normal text-sm  hover:bg-slate-600 rounded-md transition-colors">
                <Link to={"/LandingAuth"}>Login</Link>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-slate-600 hover:text-slate-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="home"
              className={`block font-normal text-sm tracking-wide py-2 transition-colors ${
                isHomeActive
                  ? "text-blue-500 font-medium"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              HOME
            </Link>

            {/* Mobile Submit Items */}
            <div className="py-2">
              <button
                onClick={handleSubmitItemsToggle}
                className="flex items-center justify-between w-full text-slate-600 hover:text-slate-800 font-normal text-sm tracking-wide"
              >
                <span
                  className={`transition-colors ${
                    isSubmitItemsActive ? "text-blue-500 font-medium" : ""
                  }`}
                >
                  SUBMIT ITEMS
                </span>
                <IoMdArrowDropdown
                  className={`w-4 h-4 transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {open && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="reportlostitem"
                    className={`block text-sm py-1 transition-colors ${
                      location.pathname === "/reportlostitem"
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    Lost Items
                  </Link>
                  <Link
                    to="reportfounditem"
                    className={`block text-sm py-1 transition-colors ${
                      location.pathname === "/reportfounditem"
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    Found Items
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Browse Items */}
            <div className="py-2">
              <button
                onClick={handleBrowseItemsToggle}
                className="flex items-center justify-between w-full text-slate-600 hover:text-slate-800 font-normal text-sm tracking-wide"
              >
                <span
                  className={`transition-colors ${
                    isBrowseItemsActive ? "text-blue-500 font-medium" : ""
                  }`}
                >
                  BROWSE ITEMS
                </span>
                <IoMdArrowDropdown
                  className={`w-4 h-4 transform transition-transform ${
                    openBrowseritem ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openBrowseritem && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="lostitem"
                    className={`block text-sm py-1 transition-colors ${
                      location.pathname === "/lostitem"
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    Lost Items
                  </Link>
                  <Link
                    to="founditem"
                    className={`block text-sm py-1 transition-colors ${
                      location.pathname === "/founditem"
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    Found Items
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="contact"
              className={`block font-normal text-sm tracking-wide py-2 transition-colors ${
                isContactActive
                  ? "text-blue-500 font-medium"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              CONTACT
            </Link>
            <button className="w-full bg-slate-500 text-white px-8 py-2 font-normal text-sm tracking-wide hover:bg-slate-600 transition-colors mt-4">
              LOGIN
            </button>

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
              <a
                href="#"
                className="text-slate-500 hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;