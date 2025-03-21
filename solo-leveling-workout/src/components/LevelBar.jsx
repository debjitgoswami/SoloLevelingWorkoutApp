const LevelBar = ({ level = 1, currentXP = 35, requiredXP = 100 }) => {
  const percentage = (currentXP / requiredXP) * 100

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-yellow-500 flex items-center justify-center mr-2">
            <span className="text-yellow-500 font-bold">{level}</span>
          </div>
          <span className="text-sm text-gray-300 font-medium">Hunter Level</span>
        </div>
        <span className="text-sm text-gray-300">
          {currentXP}/{requiredXP} XP
        </span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-1 text-xs text-gray-500 italic">{requiredXP - currentXP} XP until next level</div>
    </div>
  )
}

export default LevelBar

