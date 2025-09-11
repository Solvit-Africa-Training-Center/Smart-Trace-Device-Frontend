import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReUsableInput from "../ReusableComponents/ReUsableInput";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          CREATE ACCOUNTnnnnnnnnnnnnnn
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-md"
          />
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
            <ReUsableInput
              name="password"
              value=""
              onChange={() => {}}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="mt-2 w-full py-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition">
            SIGN UP
          </button>
        </form>

        {/* Back button */}
        {/* <button
          onClick={() => navigate("/LandingAuth")}
          className="mt-6 w-full py-2 rounded-full border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition"
        >
          Back
        </button> */}
      </div>
    </div>
  );
}
