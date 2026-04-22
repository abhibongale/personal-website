'use client'

import { useState, useEffect } from 'react'
import Image from './Image'
import Link from './Link'

interface ProjectCardProps {
  title: string
  description: string
  imgSrc?: string
  href: string
  demoUrl?: string
  technologies?: string[]
  contributions?: string
  timeline?: string
  status?: string
  category?: string
  featured?: boolean
  lastUpdated?: string
  role?: string
}

interface GitHubStats {
  stars: number
  forks: number
  loading: boolean
}

const techIcons: { [key: string]: string } = {
  // Languages
  Python: '🐍',
  Go: '🔵',
  JavaScript: '📜',
  TypeScript: '💠',
  Java: '☕',
  Rust: '🦀',
  C: '©️',
  'C++': '⚙️',

  // Frameworks & Libraries
  React: '⚛️',
  'Next.js': '▲',
  Vue: '💚',
  Angular: '🅰️',
  Django: '🎸',
  Flask: '🧪',
  FastAPI: '⚡',

  // DevOps & Cloud
  Kubernetes: '☸️',
  Docker: '🐳',
  AWS: '☁️',
  Azure: '☁️',
  GCP: '☁️',
  Terraform: '🏗️',
  Ansible: '📋',
  Jenkins: '🔧',
  'CI/CD': '🔄',

  // Databases
  PostgreSQL: '🐘',
  MySQL: '🐬',
  MongoDB: '🍃',
  Redis: '◆',
  SQLAlchemy: '🗄️',

  // APIs & Protocols
  'REST API': '🔌',
  GraphQL: '◈',
  gRPC: '📡',
  WebSocket: '🔌',

  // Tools & Platforms
  Git: '📦',
  GitHub: '🐙',
  GitLab: '🦊',
  Linux: '🐧',
  Nginx: '🟩',

  // Cloud Native & Infrastructure
  'Bare Metal': '🖥️',
  GitOps: '🔄',
  OpenStack: '☁️',
  Prometheus: '📊',
  Grafana: '📈',
  Helm: '⚓',
  Istio: '🕸️',
}

const statusConfig = {
  active: {
    label: 'Active',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    icon: '🟢',
  },
  completed: {
    label: 'Completed',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    icon: '✅',
  },
  archived: {
    label: 'Archived',
    color: 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300',
    icon: '📦',
  },
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  href,
  demoUrl,
  technologies = [],
  contributions,
  timeline,
  status = 'active',
  category,
  featured = false,
  lastUpdated,
  role,
}: ProjectCardProps) {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0, loading: true })

  useEffect(() => {
    // Extract GitHub repo from URL
    const githubMatch = href.match(/github\.com\/([^/]+\/[^/]+)/)
    if (githubMatch) {
      const repo = githubMatch[1]
      fetch(`https://api.github.com/repos/${repo}`)
        .then((res) => res.json())
        .then((data) => {
          setStats({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            loading: false,
          })
        })
        .catch(() => {
          setStats({ stars: 0, forks: 0, loading: false })
        })
    } else {
      setStats({ stars: 0, forks: 0, loading: false })
    }
  }, [href])

  const statusStyle = statusConfig[status as keyof typeof statusConfig] || statusConfig.active

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-900 ${
        featured
          ? 'border-primary-300 ring-primary-200 dark:border-primary-700 dark:ring-primary-800 ring-2'
          : 'hover:border-primary-300 dark:hover:border-primary-700 border-gray-200/60 dark:border-gray-700/60'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary-600 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      {imgSrc && (
        <Link href={href} aria-label={`Link to ${title}`}>
          <div className={`relative w-full overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              width={544}
              height={featured ? 256 : 192}
            />
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* Title and GitHub Stats */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-2xl leading-8 font-bold tracking-tight transition-colors">
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          </h2>
          {!stats.loading && stats.stars > 0 && (
            <div className="flex flex-shrink-0 items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1" title="Stars">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">{stats.stars}</span>
              </div>
              <div className="flex items-center gap-1" title="Forks">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{stats.forks}</span>
              </div>
            </div>
          )}
        </div>

        {/* Status, Category, Role, and Metadata */}
        <div className="mb-3 flex flex-wrap gap-2 text-sm">
          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-medium ${statusStyle.color}`}
          >
            <span>{statusStyle.icon}</span>
            {statusStyle.label}
          </span>

          {/* Category */}
          {category && (
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {category}
            </span>
          )}

          {/* Role */}
          {role && (
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {role}
            </span>
          )}

          {/* Contributions */}
          {contributions && (
            <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 inline-flex items-center gap-1 rounded-full px-3 py-1 font-medium">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {contributions}
            </span>
          )}

          {/* Timeline */}
          {timeline && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {timeline}
            </span>
          )}
        </div>

        {/* Last Updated */}
        {lastUpdated && (
          <div className="mb-3 text-xs text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </div>
        )}

        {/* Description */}
        <p className="prose mb-4 max-w-none text-gray-600 dark:text-gray-400">{description}</p>

        {/* Tech Stack Badges */}
        {technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <span className="text-base">{techIcons[tech] || '•'}</span>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href={href}
            className="from-primary-500 to-primary-600 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            aria-label={`View code for ${title}`}
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            View Code
          </Link>
          {demoUrl && (
            <Link
              href={demoUrl}
              className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950/20 inline-flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all duration-200"
              aria-label={`View live demo for ${title}`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
