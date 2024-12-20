'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from "react";

const SignUp = () => {
  const router = useRouter(); // Access router for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading state

  useEffect(() => {
    // Read the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const emailFromQuery = queryParams.get("email");
    const passwordFromQuery = queryParams.get("password");

    if (emailFromQuery && passwordFromQuery) {
      // Set the values from query parameters as defaults
      setEmail(emailFromQuery);
      setPassword(passwordFromQuery);
    }
  }, []); // Run only once, when the component mounts

  // Validate the input credentials against the URL parameters
  const validateCredentials = (inputEmail: string, inputPassword: string): boolean => {
    const queryParams = new URLSearchParams(window.location.search);
    const emailFromQuery = queryParams.get("email");
    const passwordFromQuery = queryParams.get("password");

    // Check if the input matches the query parameters
    return inputEmail === emailFromQuery && inputPassword === passwordFromQuery;
  };

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset error message before validation

    // Validate the entered email and password against the query params
    if (validateCredentials(email, password)) {
      // Simulate a signup process (e.g., API call)
      setTimeout(() => {
        console.log("User signed up successfully.");
        // Redirect to the dashboard with username as a query parameter
        router.push(`/dashboard?username=${encodeURIComponent(username)}`);
      }, 1500); // Simulate loading time of 1.5 seconds
    } else {
      setError("Invalid email or password.");
      setLoading(false); // Stop loading if validation fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-6 relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label htmlFor="username" className="absolute left-4 top-0 text-black peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500 transform scale-75 origin-[0] transition-all duration-200">
              Username 
            </label>
          </div>
          <div className="mb-6 relative">
            <input
              id="email"
              type="email"
           
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
            
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label htmlFor="password" className="absolute left-4 top-0 text-gray-500 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-500 transform scale-75 origin-[0] transition-all duration-200">
              Password
            </label>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Show error message if any */}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
