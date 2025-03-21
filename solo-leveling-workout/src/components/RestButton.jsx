"use client"
import { Moon, Battery } from "lucide-react"

const RestButton = ({ onRest, cooldown = 0 }) => {
  const canRest = cooldown <= 0

  // Format cooldown time
  const formatCooldown = () => {
    const hours = Math.floor(cooldown / 3600)
    const minutes = Math.floor((cooldown % 3600) / 60)
    return `${hours}h ${minutes}m`
  }

  return (
    <div className="bg-gray-900 rounded-lg border border-blue-500 p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-blue-400 flex items-center">
            <Moon className="mr-2 h-5 w-5" />
            Rest & Recover
          </h3>
          <p className="text-sm text-gray-400 mt-1">Restore 50 mana and recover from fatigue</p>
        </div>

        <button
          onClick={onRest}
          disabled={!canRest}
          className={`
            flex items-center px-4 py-2 rounded-md font-medium
            transition-colors duration-200
            ${
              !canRest ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            }
          `}
        >
          {canRest ? (
            <>
              <Battery className="mr-2 h-5 w-5" />
              Rest Now
            </>
          ) : (
            <>
              <span className="text-gray-500">Cooldown: {formatCooldown()}</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default RestButton

