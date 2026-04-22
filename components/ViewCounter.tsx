'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
  showCount?: boolean
}

export default function ViewCounter({ slug, showCount = true }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0)

  useEffect(() => {
    // Increment view count
    const incrementViews = async () => {
      try {
        // In production, this would call your analytics API
        // For now, we'll use localStorage for demonstration
        const key = `views_${slug}`
        const currentViews = parseInt(localStorage.getItem(key) || '0', 10)
        const newViews = currentViews + 1
        localStorage.setItem(key, newViews.toString())
        setViews(newViews)
      } catch (error) {
        console.error('Failed to track views:', error)
      }
    }

    incrementViews()
  }, [slug])

  if (!showCount) return null

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span>{views.toLocaleString()} views</span>
    </div>
  )
}
