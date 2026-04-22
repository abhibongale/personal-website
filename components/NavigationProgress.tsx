'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgress() {
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsNavigating(true)
    const timeout = setTimeout(() => setIsNavigating(false), 400)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="from-primary-500 to-primary-600 fixed top-0 left-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r"
        />
      )}
    </AnimatePresence>
  )
}
