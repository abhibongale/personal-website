'use client'

import { useState, useRef } from 'react'

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
  className?: string
}

export default function Pre({ children, className, ...props }: PreProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  // Extract language from className (e.g., "language-javascript")
  const language = className?.replace('language-', '') || 'text'

  const handleCopy = async () => {
    if (!preRef.current) return

    const code = preRef.current.textContent || ''
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="group relative my-6">
      {/* Header with Language and Copy Button */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-gray-300 bg-gray-100 px-4 py-2 dark:border-gray-600 dark:bg-gray-800">
        <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase select-none dark:text-gray-400">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 opacity-0 shadow-sm transition-all group-hover:opacity-100 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          aria-label="Copy code"
          type="button"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-600 dark:text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Block */}
      <pre
        ref={preRef}
        className={`!mt-0 overflow-x-auto rounded-b-lg border border-gray-300 bg-gray-50 p-4 text-sm dark:border-gray-600 dark:bg-gray-900 ${className || ''}`}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
