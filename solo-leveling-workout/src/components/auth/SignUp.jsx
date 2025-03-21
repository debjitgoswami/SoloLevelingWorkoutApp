"use client"

import { useState } from "react"
import { useAuth } from "./AuthContext"
import { Shield, Mail, Lock, User, AlertCircle } from "lucide-react"

const SignUp = ({ onToggleForm }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword || !name) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    try {
      setError("")
      setLoading(true)
      await signup(email, password, name)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-900 border border-blue-500 rounded-lg p-6 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <Shield className="h-12 w-12 text-blue-400 mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
        <p className="text-gray-400 mt-1">Begin your hunter journey</p>
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-500 rounded-md p-3 mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
            Hunter Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Sung Jin-Woo"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-500" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="hunter@email.com"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-md transition-colors duration-200 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <button onClick={onToggleForm} className="text-blue-400 hover:text-blue-300 font-medium">
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignUp

