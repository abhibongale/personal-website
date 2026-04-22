'use client'

import { useState } from 'react'
import personalConfig from '@/data/personalConfig'
import Link from '@/components/Link'
import Image from '@/components/Image'

interface Achievement {
  title: string
  issuer: string
  date: string
  icon?: string
  image?: string
  link?: string
  category?: 'certification' | 'contribution' | 'speaking' | 'award'
  credentialId?: string
  expiryDate?: string
  skills?: string[]
  verified?: boolean
  description?: string
}

const categoryConfig = {
  certification: {
    label: 'Certifications',
    icon: '📜',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  },
  contribution: {
    label: 'Open Source',
    icon: '🚀',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  },
  speaking: {
    label: 'Speaking',
    icon: '🎤',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  },
  award: {
    label: 'Awards',
    icon: '🏆',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
  },
}

export default function Achievements() {
  const achievements = personalConfig.achievements as Achievement[]
  const [filter, setFilter] = useState<string>('all')

  // Filter achievements based on preferences
  const enabledAchievements = achievements.filter((a) => {
    if (a.category === 'certification') return personalConfig.preferences.showCertifications
    if (a.category === 'contribution') return personalConfig.preferences.showContributions
    if (a.category === 'speaking') return personalConfig.preferences.showSpeaking
    if (a.category === 'award') return personalConfig.preferences.showAwards
    return true // Show uncategorized achievements by default
  })

  // Calculate stats
  const stats = {
    total: enabledAchievements.length,
    certifications: enabledAchievements.filter((a) => a.category === 'certification').length,
    contributions: enabledAchievements.filter((a) => a.category === 'contribution').length,
    speaking: enabledAchievements.filter((a) => a.category === 'speaking').length,
  }

  // Filter achievements
  const filteredAchievements =
    filter === 'all'
      ? enabledAchievements
      : enabledAchievements.filter((a) => a.category === filter)

  // Group by category (only enabled ones)
  const groupedAchievements = {
    certification: personalConfig.preferences.showCertifications
      ? enabledAchievements.filter((a) => a.category === 'certification')
      : [],
    contribution: personalConfig.preferences.showContributions
      ? enabledAchievements.filter((a) => a.category === 'contribution')
      : [],
    speaking: personalConfig.preferences.showSpeaking
      ? enabledAchievements.filter((a) => a.category === 'speaking')
      : [],
    award: personalConfig.preferences.showAwards
      ? enabledAchievements.filter((a) => a.category === 'award')
      : [],
  }

  // If no achievements are enabled, don't render anything
  if (enabledAchievements.length === 0) {
    return null
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Certifications & Achievements
            </h3>
          </div>
          <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium">
            {stats.total} Total
          </span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.certifications}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.contributions}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.speaking}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Talks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {achievements.filter((a) => a.verified).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
          </div>
        </div>
      </div>

      {/* Achievements by Category */}
      {Object.entries(groupedAchievements).map(
        ([category, items]) =>
          items.length > 0 && (
            <div
              key={category}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-6 flex items-center gap-2">
                <span className="text-2xl">
                  {categoryConfig[category as keyof typeof categoryConfig].icon}
                </span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {categoryConfig[category as keyof typeof categoryConfig].label}
                </h4>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {items.length}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {items.map((achievement, index) => (
                  <div
                    key={index}
                    className="group hover:border-primary-300 dark:hover:border-primary-700 relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all hover:shadow-lg dark:border-gray-700 dark:from-gray-900 dark:to-gray-800"
                  >
                    {/* Verified Badge */}
                    {achievement.verified && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center justify-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
                          <svg
                            className="h-3 w-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-none">Verified</span>
                        </span>
                      </div>
                    )}

                    <div
                      className={`flex items-start gap-4 ${achievement.verified ? 'pr-20' : ''}`}
                    >
                      {/* Icon or Image */}
                      <div className="bg-primary-100 dark:bg-primary-900/30 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-3xl">
                        {achievement.image ? (
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            width={56}
                            height={56}
                            className="h-14 w-14 rounded-xl object-cover"
                          />
                        ) : (
                          <span>{achievement.icon || '🏅'}</span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {achievement.link ? (
                          <Link
                            href={achievement.link}
                            className="group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h5 className="group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 mb-1 font-bold text-gray-900 transition-colors dark:text-gray-100">
                              {achievement.title}
                            </h5>
                          </Link>
                        ) : (
                          <h5 className="mb-1 font-bold text-gray-900 dark:text-gray-100">
                            {achievement.title}
                          </h5>
                        )}

                        <p className="text-primary-600 dark:text-primary-400 mb-2 text-sm font-medium">
                          {achievement.issuer}
                        </p>

                        {achievement.description && (
                          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </p>
                        )}

                        {/* Metadata */}
                        <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>Issued: {achievement.date}</span>
                          </div>

                          {achievement.expiryDate && (
                            <div className="flex items-center gap-2">
                              <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>Expires: {achievement.expiryDate}</span>
                            </div>
                          )}

                          {achievement.credentialId && (
                            <div className="flex items-center gap-2">
                              <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                />
                              </svg>
                              <span className="font-mono">ID: {achievement.credentialId}</span>
                            </div>
                          )}
                        </div>

                        {/* Skills */}
                        {achievement.skills && achievement.skills.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {achievement.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* View Link */}
                        {achievement.link && (
                          <div className="mt-3">
                            <Link
                              href={achievement.link}
                              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Credential
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  )
}
