'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  'data-language'?: string
}

export default function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const language = props['data-language'] || className?.replace('language-', '') || 'text'

  const handleCopy = async () => {
    const code = extractTextFromChildren(children)
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const extractTextFromChildren = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(extractTextFromChildren).join('')
    if (node && typeof node === 'object' && 'props' in node) {
      const props = node.props as { children?: React.ReactNode }
      return extractTextFromChildren(props.children)
    }
    return ''
  }

  return (
    <div className="group relative">
      {/* Language Badge and Copy Button */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <span className="text-xs font-semibold text-gray-600 uppercase dark:text-gray-400">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-700 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
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
      {/* Code Content */}
      <pre
        className={`!mt-0 overflow-x-auto rounded-b-lg border border-gray-200 !bg-gray-900 dark:border-gray-700 ${className}`}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
