'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import personalConfig from '@/data/personalConfig'

interface RepoStats {
  name: string
  description: string | null
  stars: number
  forks: number
  language: string | null
  url: string
  updatedAt: string
}

interface UserStats {
  followers: number
  following: number
  publicRepos: number
  publicGists: number
  createdAt: string
  bio: string | null
  location: string | null
  company: string | null
}

interface GitHubRepo {
  fork: boolean
  name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  html_url: string
  updated_at: string
}

interface GitHubUser {
  followers: number
  following: number
  public_repos: number
  public_gists: number
  created_at: string
  bio: string | null
  location: string | null
  company: string | null
}

export default function GitHubStats({
  username = personalConfig.githubUsername,
}: {
  username?: string
}) {
  const [repos, setRepos] = useState<RepoStats[]>([])
  const [userStats, setUserStats] = useState<UserStats | null>(null)
  const [totalStats, setTotalStats] = useState({ stars: 0, forks: 0, repos: 0 })
  const [languages, setLanguages] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((res) => res.json()),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).then(
        (res) => res.json()
      ),
    ])
      .then(([userData, reposData]) => {
        // User stats
        setUserStats({
          followers: userData.followers || 0,
          following: userData.following || 0,
          publicRepos: userData.public_repos || 0,
          publicGists: userData.public_gists || 0,
          createdAt: userData.created_at,
          bio: userData.bio,
          location: userData.location,
          company: userData.company,
        })

        // Filter out forks and process repos
        const ownRepos = (reposData as GitHubRepo[]).filter((repo) => !repo.fork)

        const repoData: RepoStats[] = ownRepos
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            url: repo.html_url,
            updatedAt: repo.updated_at,
          }))
          .sort((a: RepoStats, b: RepoStats) => b.stars - a.stars)
          .slice(0, 6)

        // Calculate totals
        const totalStars = ownRepos.reduce((sum: number, repo) => sum + repo.stargazers_count, 0)
        const totalForks = ownRepos.reduce((sum: number, repo) => sum + repo.forks_count, 0)

        // Calculate language distribution
        const langCount: Record<string, number> = {}
        ownRepos.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1
          }
        })

        setRepos(repoData)
        setTotalStats({ stars: totalStars, forks: totalForks, repos: ownRepos.length })
        setLanguages(langCount)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [username])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-32 rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <p className="text-red-600 dark:text-red-400">
          Failed to load GitHub stats. Please try again later.
        </p>
      </div>
    )
  }

  // Get top languages
  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-gray-900 dark:text-gray-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                GitHub Activity
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
            </div>
          </div>
          <Link
            href={`https://github.com/${username}`}
            className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 inline-flex items-center gap-2 rounded-lg border-2 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold">View Profile</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="from-primary-50 dark:from-primary-950/30 rounded-lg bg-gradient-to-br to-orange-50 p-4 text-center dark:to-orange-950/30">
            <div className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
              {totalStats.stars}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Stars</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-center dark:from-blue-950/30 dark:to-cyan-950/30">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {totalStats.repos}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Public Repos</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center dark:from-green-950/30 dark:to-emerald-950/30">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {userStats?.followers || 0}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4 text-center dark:from-purple-950/30 dark:to-pink-950/30">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {totalStats.forks}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Forks</div>
          </div>
        </div>
      </div>

      {/* Top Languages */}
      {topLanguages.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            <span className="text-2xl">💻</span>
            Top Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {topLanguages.map(([lang, count]) => (
              <span
                key={lang}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <span className="text-base">{getLanguageIcon(lang)}</span>
                {lang}
                <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-gray-700">
                  {count}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Top Repositories */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          <span className="text-2xl">⭐</span>
          Top Repositories
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            {repos.length}
          </span>
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <Link
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-primary-300 dark:hover:border-primary-700 rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-4 transition-all hover:shadow-md dark:border-gray-700 dark:from-gray-900 dark:to-gray-800"
            >
              <div className="mb-2 flex items-start justify-between">
                <h5 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-gray-900 transition-colors dark:text-gray-100">
                  {repo.name}
                </h5>
                {repo.language && (
                  <span className="ml-2 flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {repo.language}
                  </span>
                )}
              </div>
              {repo.description && (
                <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {repo.forks}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Helper function to get language icons
function getLanguageIcon(language: string): string {
  const icons: Record<string, string> = {
    JavaScript: '🟨',
    TypeScript: '🔷',
    Python: '🐍',
    Java: '☕',
    Go: '🔷',
    Rust: '🦀',
    'C++': '⚡',
    C: '⚙️',
    Ruby: '💎',
    PHP: '🐘',
    Swift: '🦅',
    Kotlin: '🟣',
    Shell: '🐚',
    HTML: '🌐',
    CSS: '🎨',
    Vue: '💚',
    Dart: '🎯',
  }
  return icons[language] || '📦'
}
