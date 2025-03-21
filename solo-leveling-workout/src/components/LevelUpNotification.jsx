"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Award, ChevronUp, X } from "lucide-react"

const LevelUpNotification = ({ show, level, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/70"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="relative max-w-md w-full mx-4"
          >
            <div className="bg-gray-900 border-2 border-blue-500 rounded-lg overflow-hidden">
              {/* Close button */}
              <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white z-10">
                <X className="h-5 w-5" />
              </button>

              {/* Header with glitch effect */}
              <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 p-6 text-center">
                <div className="level-up-glitch-overlay"></div>
                <div className="level-up-line"></div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-2"
                >
                  <Award className="h-16 w-16 mx-auto text-yellow-400 level-up-icon" />
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-2xl font-bold text-white mb-1 level-up-text"
                >
                  LEVEL UP!
                </motion.h2>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <ChevronUp className="h-5 w-5 text-green-400 mr-1" />
                  <span className="text-lg text-green-400">Level {level} Reached</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 text-center mb-4">
                  Your hunter abilities have grown stronger. New quests and challenges await!
                </p>

                <button
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-md"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LevelUpNotification

