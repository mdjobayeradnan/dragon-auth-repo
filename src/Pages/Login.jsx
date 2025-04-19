import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Login to Your Account</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 pl-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full input input-bordered"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 pl-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered"
            />
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral w-full">Login</button>
        </form>
        <p className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
