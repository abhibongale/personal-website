'use client'

import personalConfig from '@/data/personalConfig'
import Image from '@/components/Image'

interface Skill {
  name: string
  category: string
  level?: string
  icon?: string
  logo?: string
  yearsOfExperience?: number
}

interface SkillsProps {
  skills?: Skill[]
}

const categoryConfig = {
  Languages: {
    icon: '💻',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  },
  Frontend: {
    icon: '⚛️',
    color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  },
  Backend: {
    icon: '⚙️',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  },
  Database: {
    icon: '🗄️',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  },
  DevOps: {
    icon: '🔧',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
  },
  Cloud: {
    icon: '☁️',
    color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300',
  },
  Tools: {
    icon: '🛠️',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300',
  },
  Other: {
    icon: '📦',
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
  },
}

const levelConfig = {
  expert: {
    label: 'Expert',
    color: 'bg-gradient-to-r from-primary-600 to-primary-700',
    border: 'border-primary-500',
    badge: 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300',
  },
  advanced: {
    label: 'Advanced',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    border: 'border-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  },
  intermediate: {
    label: 'Intermediate',
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    border: 'border-green-400',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  },
}

export default function Skills({ skills = personalConfig.skills }: SkillsProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)))

  // Calculate stats
  const stats = {
    total: skills.length,
    expert: skills.filter((s) => s.level === 'expert').length,
    advanced: skills.filter((s) => s.level === 'advanced').length,
    categories: categories.length,
  }

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="text-primary-500 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tech Stack</h3>
          </div>
          <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium">
            {stats.total} Skills
          </span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.expert}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.advanced}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.categories}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      {categories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category)
        const config =
          categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.Other

        return (
          <div
            key={category}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="text-2xl">{config.icon}</span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{category}</h4>
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {categorySkills.length}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill) => {
                const level = (skill.level || 'intermediate') as keyof typeof levelConfig
                const levelStyle = levelConfig[level] || levelConfig.intermediate

                return (
                  <div
                    key={skill.name}
                    className={`group relative overflow-hidden rounded-lg border ${levelStyle.border} bg-gradient-to-br from-white to-gray-50 p-4 transition-all hover:shadow-md dark:border-gray-700 dark:from-gray-900 dark:to-gray-800`}
                  >
                    {/* Level Badge */}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelStyle.badge}`}
                      >
                        {levelStyle.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Icon/Logo */}
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        {skill.logo ? (
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-lg object-contain p-1"
                          />
                        ) : (
                          <span className="text-xl">{skill.icon || '📦'}</span>
                        )}
                      </div>

                      {/* Skill Info */}
                      <div className="min-w-0 flex-1">
                        <h5 className="truncate font-semibold text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </h5>
                        {skill.yearsOfExperience && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.yearsOfExperience}+ years
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
