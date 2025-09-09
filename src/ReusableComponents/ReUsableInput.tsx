
import React from "react";

interface InputProps {
  label?: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReUsableInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  error,
  onChange,
}) => {
  return (
    <div className="mb-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full px-3 py-2.5 border-1 border-primaryColor-100 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
 ${
   error
     ? "border-red-500 ring-red-200"
     : "border-primaryBoderColor ring-blue-200"
 }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ReUsableInput;
