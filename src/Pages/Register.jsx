import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Register Your Account</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 pl-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 pl-1">Photo URL</label>
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full input input-bordered"
            />
          </div>
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
          <button type="submit" className="btn btn-neutral w-full">Register</button>
        </form>
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
