const ManaBar = ({ currentMana = 75, maxMana = 100 }) => {
  const percentage = (currentMana / maxMana) * 100

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-blue-400 font-medium">Mana</span>
        <span className="text-sm text-gray-300">
          {currentMana}/{maxMana}
        </span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-1 text-xs text-gray-500 italic">Recovers 10 mana per hour</div>
    </div>
  )
}

export default ManaBar

