"use client"

import { useState, useRef, useEffect } from "react"
import { useAuth } from "./auth/AuthContext"
import { LogOut, User, Settings } from "lucide-react"

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 rounded-full bg-gray-800 border border-blue-500 flex items-center justify-center text-blue-400 font-bold hover:bg-gray-700 transition-colors"
      >
        {currentUser.name.charAt(0)}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-blue-500 rounded-md shadow-lg z-10">
          <div className="p-3 border-b border-gray-800">
            <p className="text-white font-medium">{currentUser.name}</p>
            <p className="text-gray-400 text-sm">{currentUser.email}</p>
          </div>

          <div className="p-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">
              <User className="h-4 w-4 mr-2" />
              Profile
            </button>

            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-md"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown

