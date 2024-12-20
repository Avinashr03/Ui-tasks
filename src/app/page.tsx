'use client';
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State to manage success message
  const router = useRouter(); // Get the router object for navigation

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    // Simulate sign-in logic
    console.log("Email:", email, "Password:", password);

    // Show success message
    setSuccessMessage("User registered successfully");
  };

  // Function to navigate to SignUp page and pass email and password
  const handleSignUpRedirect = () => {
    router.push(`/auth?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sign In</h2>

        {/* Show Success Message */}
        {successMessage && (
          <div className="mb-4 text-green-600 bg-green-100 px-4 py-3 rounded-md">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSignIn}>
          <div className="mb-6 relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label htmlFor="email" className="absolute left-4 top-0 text-black peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500 transform scale-75 origin-[0] transition-all duration-200">
              Email
            </label>
          </div>
          <div className="mb-6 relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label htmlFor="password" className="absolute left-4 top-0 text-gray-500 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500 transform scale-75 origin-[0] transition-all duration-200">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={handleSignUpRedirect} // Redirect to SignUp page
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
