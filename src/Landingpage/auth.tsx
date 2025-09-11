import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function LandingAuth() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("signup");

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-[800px] h-[500px] shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section - Dynamic Content */}
        {activeForm === "signup" ? (
          <div className="w-1/2 bg-primaryColor-100 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-3xl font-bold mb-2">Welcome Back !</h2>
            <p className="mb-6 text-center">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => setActiveForm("login")}
              className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-primaryColor-100 transition"
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="w-1/2 bg-primaryColor-100 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-3xl font-medium mb-2">Hello, Friend!</h2>
            <p className="mb-6 text-center">
              Fill up personal information and start journey with us
            </p>
            <button
              onClick={() => setActiveForm("signup")}
              className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-primaryColor-100 transition"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Right Section - Dynamic Content */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-10">
          {activeForm === "signup" ? (
            <>
              <h2 className="text-xl font-medium text-primaryColor-100 mb-6">
                Create Account
              </h2>

              {/* Social Icons */}
              <div className="flex justify-center space-x-6 mb-6">
                <button className="p-2 rounded-full border border-gray-300 text-black hover:bg-gray-100 transition">
                  <FaXTwitter className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                  <FcGoogle className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 text-blue-600 hover:bg-blue-50 transition">
                  <FaLinkedin className="w-5 h-5" />
                </button>
              </div>

              <p className="mb-4 text-sm text-primaryColor-100">
                or use your email for registration
              </p>

              <form className="w-full flex flex-col gap-4">
                <div className="flex items-center border-[1.4px] border-primaryColor-100 p-3 rounded-md">
                  <User className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border-[1.4px] border-primaryColor-100 p-3 rounded-md">
                  <Mail className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border-[1.4px] border-primaryColor-100 p-3 rounded-md">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="button"
                  // onClick={() => navigate("/login")}
                  className="px-8 py-2  rounded-full border border-primaryColor-100 hover:bg-white text-primaryColor-100 w-1/2  flex flex-col justify-items-center transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setActiveForm("login")}
                  className="text-blue-800 hover:underline"
                >
                  Sign in
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-medium text-primaryColor-100 mb-6">
                Sign In Into Your Account
              </h2>

              {/* Social Icons */}
              <div className="flex justify-center space-x-6 mb-6">
                <button className="p-2 rounded-full border border-gray-300 text-black hover:bg-gray-100 transition">
                  <FaXTwitter className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                  <FcGoogle className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 text-blue-600 hover:bg-blue-50 transition">
                  <FaLinkedin className="w-5 h-5" />
                </button>
              </div>

              <p className="mb-4 text-sm text-gray-600">
                or use your email account
              </p>

              <form className="w-full flex flex-col gap-4">
                <div className="flex items-center border-[1.4px] border-primaryColor-100 p-3 rounded-md">
                  <Mail className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border-[1.4px] border-primaryColor-100 p-3 rounded-md">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => navigate("/userdash")}
                  className="px-8 py-2  rounded-full border border-primaryColor-100 hover:bg-white text-primaryColor-100 w-1/2 transition"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveForm("login")}
                  className="text-blue-800 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}