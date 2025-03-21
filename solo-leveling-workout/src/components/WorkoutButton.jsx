"use client"
import { ChevronRight } from "lucide-react"

const WorkoutButton = ({ workout, onSelectWorkout, disabled = false }) => {
  return (
    <button
      onClick={() => onSelectWorkout(workout)}
      disabled={disabled}
      className={`
        flex items-center px-3 py-1.5 rounded-md text-sm font-medium
        transition-colors duration-200
        ${disabled ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}
      `}
    >
      Start
      <ChevronRight className="ml-1 h-4 w-4" />
    </button>
  )
}

export default WorkoutButton

