"use client"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, CheckCircle } from "lucide-react"

const Notification = ({ show, type, message, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="notification-container">
            <div
              className={`
                notification-content relative overflow-hidden
                border-2 rounded-lg shadow-lg p-4 pr-6 pl-5
                flex items-center
                ${
                  type === "error"
                    ? "bg-red-900/80 border-red-500 text-white"
                    : "bg-blue-900/80 border-blue-400 text-white"
                }
              `}
            >
              {/* Glitch overlay */}
              <div className="glitch-overlay"></div>

              {/* Icon */}
              <div className="mr-3 relative z-10">
                {type === "error" ? (
                  <div className="notification-icon-error">
                    <AlertTriangle className="h-6 w-6 text-red-300" />
                  </div>
                ) : (
                  <div className="notification-icon-success">
                    <CheckCircle className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="relative z-10">
                <p className="font-medium text-sm md:text-base notification-text">{message}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 notification-line"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1 notification-line"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification

