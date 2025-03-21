"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create the authentication context
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on initial load
  useEffect(() => {
    const user = localStorage.getItem("soloLevelingUser")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  // Sign up function
  const signup = (email, password, name) => {
    // In a real app, this would call an API
    // For demo purposes, we'll just store in localStorage

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("soloLevelingUsers") || "[]")
    const existingUser = users.find((user) => user.email === email)

    if (existingUser) {
      throw new Error("User already exists with this email")
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      // In a real app, NEVER store passwords in localStorage or in plain text
      // This is just for demonstration
      password,
      createdAt: new Date().toISOString(),
      stats: {
        name: name,
        rank: "E",
        level: 1,
        currentXP: 0,
        requiredXP: 100,
        currentMana: 100,
        maxMana: 100,
      },
      completedWorkouts: [],
    }

    // Save user to "database"
    users.push(newUser)
    localStorage.setItem("soloLevelingUsers", JSON.stringify(users))

    // Log user in
    localStorage.setItem("soloLevelingUser", JSON.stringify(newUser))
    setCurrentUser(newUser)

    return newUser
  }

  // Login function
  const login = (email, password) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("soloLevelingUsers") || "[]")

    // Find user with matching email and password
    const user = users.find((user) => user.email === email && user.password === password)

    if (!user) {
      throw new Error("Invalid email or password")
    }

    // Save current user to localStorage
    localStorage.setItem("soloLevelingUser", JSON.stringify(user))
    setCurrentUser(user)

    return user
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem("soloLevelingUser")
    setCurrentUser(null)
  }

  // Update user data
  const updateUserData = (userData) => {
    if (!currentUser) return

    // Update current user
    const updatedUser = {
      ...currentUser,
      ...userData,
    }

    // Update in localStorage
    localStorage.setItem("soloLevelingUser", JSON.stringify(updatedUser))

    // Update users array
    const users = JSON.parse(localStorage.getItem("soloLevelingUsers") || "[]")
    const updatedUsers = users.map((user) => (user.id === currentUser.id ? updatedUser : user))
    localStorage.setItem("soloLevelingUsers", JSON.stringify(updatedUsers))

    // Update state
    setCurrentUser(updatedUser)
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateUserData,
    loading,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

