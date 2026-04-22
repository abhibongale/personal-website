'use client'

import { useState, useMemo } from 'react'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import personalConfig from '@/data/personalConfig'

export default function ProjectsLayout() {
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  const showFilters = personalConfig.preferences?.showProjectFilters !== false
  const showFeatured = personalConfig.preferences?.showFeaturedProjects !== false

  // Extract all unique technologies and statuses
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>()
    projectsData.forEach((project) => {
      project.technologies?.forEach((tech) => techSet.add(tech))
    })
    return Array.from(techSet).sort()
  }, [])

  const statuses = ['all', 'active', 'completed', 'archived']

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const techMatch =
        selectedTech === 'all' || project.technologies?.includes(selectedTech) || false
      const statusMatch = selectedStatus === 'all' || project.status === selectedStatus
      return techMatch && statusMatch
    })
  }, [selectedTech, selectedStatus])

  // Calculate stats
  const stats = useMemo(() => {
    const activeProjects = projectsData.filter((p) => p.status === 'active').length
    const totalTechs = allTechnologies.length
    const categories = new Set(projectsData.map((p) => p.category)).size

    return {
      total: projectsData.length,
      active: activeProjects,
      technologies: totalTechs,
      categories,
    }
  }, [allTechnologies])

  // Featured projects
  const featuredProjects = projectsData.filter((p) => p.featured)
  const regularProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Enhanced Header */}
      <div className="from-primary-50 dark:from-primary-950/20 mb-8 space-y-6 rounded-xl border border-gray-200 bg-gradient-to-br to-orange-50 p-8 shadow-sm dark:border-gray-800 dark:to-orange-950/20">
        <div>
          <h1 className="mb-3 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            Open-source contributions and personal projects building the future of cloud
            infrastructure and bare metal automation
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.active}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.technologies}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.categories}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="space-y-4 py-8">
          {/* Status Filter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
              Status
            </h3>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
              Technology
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech('all')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedTech === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                All
              </button>
              {allTechnologies.slice(0, 10).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedTech === tech
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedTech !== 'all' || selectedStatus !== 'all') && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Showing {filteredProjects.length} projects</span>
              <button
                onClick={() => {
                  setSelectedTech('all')
                  setSelectedStatus('all')
                }}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Featured Projects */}
      {showFeatured &&
        featuredProjects.length > 0 &&
        selectedTech === 'all' &&
        selectedStatus === 'all' && (
          <div className="py-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
              <svg className="text-primary-500 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Projects
            </h2>
            <div className="grid gap-6 lg:grid-cols-1">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} featured={true} />
              ))}
            </div>
          </div>
        )}

      {/* All Projects */}
      <div className="py-8">
        {showFeatured &&
          featuredProjects.length > 0 &&
          selectedTech === 'all' &&
          selectedStatus === 'all' && (
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              All Projects
            </h2>
          )}
        {regularProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {regularProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <svg
              className="mx-auto mb-4 h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
