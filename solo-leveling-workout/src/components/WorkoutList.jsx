import { Dumbbell, Clock, Zap } from "lucide-react"
import WorkoutButton from "./WorkoutButton"

const WorkoutList = ({ workouts = [], onSelectWorkout, currentMana = 75 }) => {
  return (
    <div className="bg-gray-900 rounded-lg border border-blue-500 p-4 mb-6">
      <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
        <Dumbbell className="mr-2 h-5 w-5" />
        Available Quests
      </h2>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white">{workout.name}</h3>
              <div className="flex items-center text-blue-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{workout.duration} min</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-3">{workout.description}</p>
           

            <div className="flex justify-between items-center">
              <div className="flex items-center text-purple-400 text-sm">
                <Zap className="h-4 w-4 mr-1" />
                <span>Mana cost: {workout.manaCost}</span>
              </div>

              <WorkoutButton
                workout={workout}
                onSelectWorkout={onSelectWorkout}
                disabled={currentMana < workout.manaCost}
              />
            </div>
          </div>
        ))}
      </div>

      {workouts.length === 0 && (
        <div className="text-center py-6 text-gray-500">No quests available. Check back later.</div>
      )}
    </div>
  )
}

export default WorkoutList

