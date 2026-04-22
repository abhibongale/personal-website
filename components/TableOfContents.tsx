'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const elements = document.querySelectorAll('h2, h3')
    const items: TOCItem[] = Array.from(elements).map((elem, index) => ({
      id: elem.id || `heading-${index}`,
      text: elem.textContent || '',
      level: parseInt(elem.tagName.substring(1)),
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    elements.forEach((elem) => observer.observe(elem))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-auto rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm xl:block dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
      <h3 className="mb-5 flex items-center gap-2 border-b border-gray-200 pb-3 text-sm font-bold tracking-wide text-gray-700 uppercase dark:border-gray-700 dark:text-gray-300">
        <svg
          className="text-primary-500 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        Contents
      </h3>
      <ul className="space-y-1">
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id
          const isH2 = heading.level === 2
          const isH3 = heading.level === 3

          return (
            <li
              key={`${heading.id}-${index}`}
              className={`${isH3 ? 'ml-4 border-l-2 border-gray-200 pl-3 dark:border-gray-700' : ''}`}
              style={{ animation: 'none' }}
            >
              <a
                href={`#${heading.id}`}
                className={`block py-1 text-sm transition-all duration-200 ${
                  isH2 ? 'font-medium' : 'font-normal'
                } ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400 font-bold'
                    : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-700 dark:text-gray-300'
                } ${isH3 && isActive ? 'border-primary-500 -ml-[2px] border-l-2 pl-[10px]' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}
              >
                {isH2 && (
                  <span className="bg-primary-500 mr-2 inline-block h-1.5 w-1.5 rounded-full"></span>
                )}
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
