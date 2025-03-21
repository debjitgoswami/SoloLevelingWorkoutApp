"use client"

import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"

const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true)

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
          SOLO LEVELING WORKOUT
        </h1>
        <p className="text-gray-400">Level up your fitness journey</p>
      </div>

      {showLogin ? <Login onToggleForm={toggleForm} /> : <SignUp onToggleForm={toggleForm} />}
    </div>
  )
}

export default AuthScreen

