'use client'

import { useState } from 'react'

interface CodePlaygroundProps {
  initialCode?: string
  language?: 'javascript' | 'python' | 'html'
  title?: string
}

export default function CodePlayground({
  initialCode = '// Write your code here\nconsole.log("Hello, World!");',
  language = 'javascript',
  title = 'Code Playground',
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')

  const runCode = () => {
    setOutput('')
    try {
      // Create a safe sandbox for code execution
      const logs: string[] = []
      const customConsole = {
        log: (...args: unknown[]) => logs.push(String(args.join(' '))),
        error: (...args: unknown[]) => logs.push('Error: ' + String(args.join(' '))),
      }

      if (language === 'javascript') {
        const func = new Function('console', code)
        func(customConsole)
        setOutput(logs.join('\n') || 'Code executed successfully (no output)')
      } else {
        setOutput('Only JavaScript is currently supported in the playground')
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
        </div>
        <button
          onClick={runCode}
          className="bg-primary-500 hover:bg-primary-600 flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium text-white transition-all"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Run
        </button>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="border-b border-gray-200 md:border-r md:border-b-0 dark:border-gray-700">
          <div className="bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 uppercase dark:bg-gray-800 dark:text-gray-400">
            Code
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-64 w-full resize-none bg-gray-50 p-4 font-mono text-sm text-gray-900 focus:outline-none dark:bg-gray-900 dark:text-gray-100"
            spellCheck="false"
          />
        </div>
        <div>
          <div className="bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-600 uppercase dark:bg-gray-800 dark:text-gray-400">
            Output
          </div>
          <pre className="h-64 overflow-auto bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {output || 'Click "Run" to see output...'}
          </pre>
        </div>
      </div>
    </div>
  )
}
