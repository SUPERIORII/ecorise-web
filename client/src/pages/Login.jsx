import React, { useState } from "react";
import { FormInput, SubmitBtn } from "../components/common";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";

toast;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(formData);

  // handle login
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);

    toast.success("login successfully");
  };

  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <aside className="w-full max-w-6xl bg-dark-green rounded-2xl overflow-hidden shadow-xl flex">
        {/* Left side - Illustration */}
        <section className="hidden md:block w-1/2 relative bg-white">
          <div className="h-full">
            <img
              src="../src/assets/person.jpg"
              alt="Person working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Right side - Form */}
        <section className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center">
              <div className="flex gap-2 justify-center items-center mb-2">
                <img
                  src={logo}
                  className="fas fa-comment-dots mr-1 w-[30px] h-[30px]"
                  alt="Ecorise Global Initiative Logo"
                />
                <span className="text-lime-500 font-bold text-lg">
                  Ecorise Global Initiative
                </span>
              </div>

              <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-8">
                Login Panel
              </h1>
            </div>

            <div className="space-y-4">
              <FormInput
                label="Email Address"
                name="email"
                type="text"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {/* PASSWORD ELEMENT */}
              <div className="relative">
                <FormInput
                  label="Enter Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform text-white cursor-pointer !rounded-button whitespace-nowrap"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {/* SUBMIT BUTTON */}
              <SubmitBtn text="Login" handleSubmit={handleClick} />
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              <p>
                By login, you agree to Ecorise's
                <br />
                <a href="#" className="text-lime-600 hover:underline">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="text-lime-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </aside>
    </main>
  );
};

export default Login;
