"use client"
import { Shield } from "lucide-react"
import { useAuth } from "./auth/AuthContext"
import ProfileDropdown from "./ProfileDropdown"

const Header = () => {
  const { currentUser } = useAuth()
  const { name, stats } = currentUser
  const rank = stats?.rank || "E"

  return (
    <header className="bg-gray-900 border-b border-blue-500 p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-400 mr-3" />
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ARISE
            </h1>
            <p className="text-gray-400 text-sm">Daily System Quest</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-right mr-3">
            <p className="text-white font-medium">{name}</p>
            <div className="flex items-center justify-end">
              <span className="text-xs text-gray-400">Rank:</span>
              <span className={`ml-1 text-sm font-bold ${getRankColor(rank)}`}>{rank}</span>
            </div>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}

// Helper function to get color based on rank
function getRankColor(rank) {
  switch (rank.toUpperCase()) {
    case "S":
      return "text-purple-500"
    case "A":
      return "text-red-500"
    case "B":
      return "text-orange-500"
    case "C":
      return "text-yellow-500"
    case "D":
      return "text-green-500"
    case "E":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

export default Header

