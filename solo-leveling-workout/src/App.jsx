"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import ManaBar from "./components/ManaBar"
import LevelBar from "./components/LevelBar"
import WorkoutList from "./components/WorkoutList"
import CompletedWorkouts from "./components/CompletedWorkouts"
import RestButton from "./components/RestButton"
import AuthScreen from "./components/auth/AuthScreen"
import { workouts } from "./data/workouts"
import { AlertTriangle, CheckCircle, X } from "lucide-react"
import { useAuth } from "./components/auth/AuthContext"

function App() {
  const { currentUser, updateUserData } = useAuth()

  const initialStats = {
    name: currentUser?.name || "",
    rank: "E",
    level: 1,
    currentXP: 0,
    requiredXP: 100,
    currentMana: 100,
    maxMana: 100,
  }

  const [playerStats, setPlayerStats] = useState(currentUser?.stats || initialStats)
  const [availableWorkouts, setAvailableWorkouts] = useState(workouts)
  const [completedWorkouts, setCompletedWorkouts] = useState(currentUser?.completedWorkouts || [])
  const [restCooldown, setRestCooldown] = useState(0)
  const [activeWorkout, setActiveWorkout] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [notification, setNotification] = useState({ type: "", message: "" })
  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser)

  // Update login state and user data on auth change
  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true)
      setPlayerStats(currentUser.stats || initialStats)
      setCompletedWorkouts(currentUser.completedWorkouts || [])
    } else {
      setIsLoggedIn(false)
    }
  }, [currentUser])

  // Load cooldown from localStorage
  useEffect(() => {
    if (!currentUser?.id) return
    const savedCooldown = localStorage.getItem(`restCooldown_${currentUser.id}`)
    if (savedCooldown) {
      const remainingTime = Math.floor((Number(savedCooldown) - Date.now()) / 1000)
      if (remainingTime > 0) setRestCooldown(remainingTime)
    }
  }, [currentUser?.id])

  // Save user data when stats or workouts update
  useEffect(() => {
    if (!currentUser) return
    updateUserData({ stats: playerStats, completedWorkouts })
  }, [playerStats, completedWorkouts])

  // Countdown for rest cooldown
  useEffect(() => {
    if (restCooldown <= 0) return
    const timer = setInterval(() => setRestCooldown((prev) => Math.max(prev - 1, 0)), 1000)
    return () => clearInterval(timer)
  }, [restCooldown])

  // Mana regeneration (1 mana per minute)
  useEffect(() => {
    const manaTimer = setInterval(() => {
      setPlayerStats((prev) => ({
        ...prev,
        currentMana: Math.min(prev.currentMana + 1, prev.maxMana),
      }))
    }, 60000) // 60 seconds

    return () => clearInterval(manaTimer)
  }, [])

  // Handle workout selection
  const handleSelectWorkout = (workout) => {
    if (playerStats.currentMana < workout.manaCost) {
      showNotificationMessage("error", "Not enough mana to start this quest!")
      return
    }
    setActiveWorkout(workout)
  }

  // Handle workout completion
  const handleCompleteWorkout = () => {
    if (!activeWorkout) return

    const newStats = { ...playerStats }
    newStats.currentMana -= activeWorkout.manaCost
    newStats.currentXP += activeWorkout.xpReward

    // Level up check
    while (newStats.currentXP >= newStats.requiredXP) {
      newStats.level += 1
      newStats.currentXP -= newStats.requiredXP
      newStats.requiredXP = Math.floor(newStats.requiredXP * 1.5)

      // Rank Update
      const levelRanks = { 5: "D", 10: "C", 15: "B", 20: "A", 25: "S" }
      newStats.rank = levelRanks[Object.keys(levelRanks).reverse().find((lvl) => newStats.level >= lvl)] || "E"

      showNotificationMessage("success", `Level up! You are now level ${newStats.level}!`)
    }

    setPlayerStats(newStats)

    setCompletedWorkouts((prev) => [
      { id: activeWorkout.id, name: activeWorkout.name, completedAt: new Date().toISOString(), xpGained: activeWorkout.xpReward },
      ...prev,
    ])

    showNotificationMessage("success", `Quest completed! +${activeWorkout.xpReward} XP gained!`)
    setActiveWorkout(null)
  }

  // Handle resting
  const handleRest = () => {
    if (restCooldown > 0) return

    setPlayerStats((prev) => ({
      ...prev,
      currentMana: Math.min(prev.currentMana + 50, prev.maxMana),
    }))

    const cooldownTime = Date.now() + 4 * 60 * 60 * 1000
    setRestCooldown(4 * 60 * 60)
    localStorage.setItem(`restCooldown_${currentUser.id}`, cooldownTime.toString())

    showNotificationMessage("success", "You have rested and recovered 50 mana!")
  }

  // Show notification
  const showNotificationMessage = (type, message) => {
    setNotification({ type, message })
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  if (!isLoggedIn) return <AuthScreen />

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 pb-8">
        <ManaBar currentMana={playerStats.currentMana} maxMana={playerStats.maxMana} />
        <LevelBar level={playerStats.level} currentXP={playerStats.currentXP} requiredXP={playerStats.requiredXP} />

        <RestButton onRest={handleRest} cooldown={restCooldown} />

        {activeWorkout ? (
          <div className="bg-gray-900 rounded-lg border border-blue-500 p-4 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-blue-400">{activeWorkout.name}</h2>
              <button onClick={() => setActiveWorkout(null)} className="text-gray-500 hover:text-gray-300">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-400 mb-4">{activeWorkout.description}</p>
            <button onClick={handleCompleteWorkout} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md">
              Complete Workout
            </button>
          </div>
        ) : (
          <WorkoutList workouts={availableWorkouts} onSelectWorkout={handleSelectWorkout} currentMana={playerStats.currentMana} />
        )}

        <CompletedWorkouts completedWorkouts={completedWorkouts} />
      </div>

      {showNotification && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${notification.type === "error" ? "bg-red-900" : "bg-green-900"} text-white`}>
          {notification.type === "error" ? <AlertTriangle className="h-5 w-5 mr-2" /> : <CheckCircle className="h-5 w-5 mr-2" />}
          <span>{notification.message}</span>
        </div>
      )}
    </div>
  )
}

export default App
