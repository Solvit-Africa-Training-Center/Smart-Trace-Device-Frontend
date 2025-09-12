import { Mail, Lock } from "lucide-react";

export default function Login() {

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          SIGN IN
        </h2>
        <form className="flex flex-col gap-4">
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
          <button className="mt-2 w-full py-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition">
            SIGN IN
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
