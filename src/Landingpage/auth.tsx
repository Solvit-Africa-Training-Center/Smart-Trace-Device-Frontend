import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { FaGooglePlus } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
export default function LandingAuth() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("signup");

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-[800px] h-[500px] shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-800 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-2">WELCOME BACK!</h2>
          <p className="mb-6 text-center">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={() => setActiveForm("login")}
            className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-blue-800 transition"
          >
            SIGN IN
          </button>
        </div>

        {/* Right Section - Dynamic Content */}
       
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-10">
          {activeForm === "signup" ? (
            <>
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                CREATE ACCOUNT
              </h2>
              {/* <p className="mb-6 text-center text-gray-600">
                If you don't have an account yet, sign up to get started
              </p> */}
               <div className="w-6 h-6 text-white">
                          <FcGoogle />
                          </div>
              <form className="w-full flex flex-col gap-4">
                <div className="flex items-center border p-3 rounded-md">
                  <User className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border p-3 rounded-md">
                  <Mail className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border p-3 rounded-md">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="mt-2 w-full py-3 rounded-full bg-blue-800 text-primaryColor-75 hover:bg-blue-900 transition"
                >
                  SIGN UP
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
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                SIGN IN
              </h2>
              <p className="mb-6 text-center text-gray-600">
                Enter your credentials to access your account
              </p>
              <form className="w-full flex flex-col gap-4">
                <div className="flex items-center border p-3 rounded-md">
                  <Mail className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border p-3 rounded-md">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="mt-2 w-full py-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition"
                >
                  SIGN IN
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveForm("signup")}
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