import { CheckCircle, Calendar, Award } from "lucide-react"

const CompletedWorkouts = ({ completedWorkouts = [] }) => {
  // Group workouts by date
  const groupedWorkouts = completedWorkouts.reduce((acc, workout) => {
    const date = new Date(workout.completedAt).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(workout)
    return acc
  }, {})

  return (
    <div className="bg-gray-900 rounded-lg border border-blue-500 p-4 mb-6">
      <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
        <CheckCircle className="mr-2 h-5 w-5" />
        Completed Quests
      </h2>

      {Object.keys(groupedWorkouts).length > 0 ? (
        <div className="space-y-4">
          {Object.entries(groupedWorkouts).map(([date, workouts]) => (
            <div key={date} className="border-b border-gray-800 pb-3 last:border-0 last:pb-0">
              <div className="flex items-center mb-2 text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>

              <div className="space-y-2">
                {workouts.map((workout) => (
                  <div key={workout.id} className="bg-gray-800 rounded-md p-3 flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{workout.name}</h4>
                      <div className="text-xs text-gray-500">
                        {new Date(workout.completedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>

                    <div className="flex items-center text-yellow-500">
                      <Award className="h-4 w-4 mr-1" />
                      <span>+{workout.xpGained} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">No completed quests yet. Start your journey!</div>
      )}
    </div>
  )
}

export default CompletedWorkouts

