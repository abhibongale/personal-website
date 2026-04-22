'use client'

import { useState, useMemo } from 'react'
import personalConfig from '@/data/personalConfig'

interface ReadingItem {
  title: string
  author: string
  type: 'book' | 'research-paper'
  description: string
  link?: string
  year?: string
  tags?: string[]
  status?: 'want-to-read' | 'reading' | 'completed'
  rating?: number
  coverImage?: string
  publisher?: string
  conference?: string
  dateRead?: string
  featured?: boolean
  notes?: string
}

const statusConfig = {
  'want-to-read': {
    label: 'Want to Read',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
    icon: '📖',
  },
  reading: {
    label: 'Currently Reading',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    icon: '📚',
  },
  completed: {
    label: 'Completed',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    icon: '✅',
  },
}

export default function Shelf() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('year-desc')

  const readingList = personalConfig.readingList as ReadingItem[]

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    readingList.forEach((item) => {
      item.tags?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [readingList])

  // Calculate stats
  const stats = useMemo(() => {
    return {
      total: readingList.length,
      books: readingList.filter((i) => i.type === 'book').length,
      papers: readingList.filter((i) => i.type === 'research-paper').length,
      completed: readingList.filter((i) => i.status === 'completed').length,
      reading: readingList.filter((i) => i.status === 'reading').length,
    }
  }, [readingList])

  // Filter and sort reading list
  const filteredList = useMemo(() => {
    let filtered = readingList

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query))
        )
      })
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter((item) => item.type === selectedType)
    }

    // Status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter((item) => item.status === selectedStatus)
    }

    // Tag filter
    if (selectedTag !== 'all') {
      filtered = filtered.filter((item) => item.tags?.includes(selectedTag))
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'year-desc':
          return (parseInt(b.year || '0') || 0) - (parseInt(a.year || '0') || 0)
        case 'year-asc':
          return (parseInt(a.year || '0') || 0) - (parseInt(b.year || '0') || 0)
        case 'title':
          return a.title.localeCompare(b.title)
        case 'author':
          return a.author.localeCompare(b.author)
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        default:
          return 0
      }
    })

    return sorted
  }, [searchQuery, selectedType, selectedStatus, selectedTag, sortBy, readingList])

  const books = filteredList.filter((item) => item.type === 'book')
  const papers = filteredList.filter((item) => item.type === 'research-paper')
  const featured = readingList.filter((item) => item.featured)

  const renderItem = (item: ReadingItem, index: number) => {
    const statusStyle = item.status ? statusConfig[item.status] : null

    return (
      <div
        key={index}
        className={`group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg dark:bg-gray-900 ${
          item.featured
            ? 'border-primary-300 ring-primary-200 dark:border-primary-700 dark:ring-primary-800 ring-2'
            : 'hover:border-primary-300 dark:hover:border-primary-700 border-gray-200 dark:border-gray-700'
        }`}
      >
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-primary-600 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Recommended
            </span>
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Cover Image or Icon */}
          <div className="flex-shrink-0">
            {item.coverImage ? (
              <Image
                src={item.coverImage}
                alt={item.title}
                width={96}
                height={128}
                className="h-32 w-24 rounded-lg object-cover shadow-md"
              />
            ) : item.type === 'book' ? (
              <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-32 w-24 items-center justify-center rounded-lg">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex h-32 w-24 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="mb-2">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-xl font-bold text-gray-900 transition-colors dark:text-gray-100"
                >
                  {item.title}
                </a>
              ) : (
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
              )}
            </div>

            {/* Rating */}
            {item.rating && (
              <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating! ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                  ({item.rating}/5)
                </span>
              </div>
            )}

            <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">{item.author}</span>
              {item.year && <span className="text-gray-500"> • {item.year}</span>}
              {item.publisher && <span className="text-gray-500"> • {item.publisher}</span>}
              {item.conference && <span className="text-gray-500"> • {item.conference}</span>}
              {item.dateRead && <span className="text-gray-500"> • Read: {item.dateRead}</span>}
            </p>

            {/* Status and Type Badges */}
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                {item.type === 'book' ? '📚 Book' : '📄 Paper'}
              </span>
              {statusStyle && (
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusStyle.color}`}
                >
                  {statusStyle.icon} {statusStyle.label}
                </span>
              )}
            </div>

            <p className="mb-3 text-gray-700 dark:text-gray-300">{item.description}</p>

            {/* Notes */}
            {item.notes && (
              <div className="bg-primary-50 dark:bg-primary-950/20 mb-3 rounded-lg p-3">
                <p className="text-sm text-gray-700 italic dark:text-gray-300">
                  <span className="font-semibold not-italic">My notes:</span> {item.notes}
                </p>
              </div>
            )}

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <button
                    key={tagIndex}
                    onClick={() => setSelectedTag(tag)}
                    className="from-primary-500 to-primary-600 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-medium text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            {/* Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1 text-sm font-medium transition-colors"
              >
                {item.type === 'book' ? 'View Book' : 'Read Paper'}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Enhanced Header */}
      <div className="from-primary-50 dark:from-primary-950/20 mb-8 space-y-6 rounded-xl border border-gray-200 bg-gradient-to-br to-orange-50 p-8 shadow-sm dark:border-gray-800 dark:to-orange-950/20">
        <div>
          <h1 className="mb-3 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            Reading Shelf
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            Books and research papers that have shaped my thinking on distributed systems, software
            architecture, and engineering practices.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.books}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Books</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.papers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Papers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.completed}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stats.reading}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Reading</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="space-y-4 py-8">
        {/* Type Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
            Type
          </h3>
          <div className="flex flex-wrap gap-2">
            {['all', 'book', 'research-paper'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedType === type
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {type === 'all' ? 'All' : type === 'book' ? 'Books' : 'Papers'}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
            Reading Status
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                selectedStatus === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              All
            </button>
            {Object.entries(statusConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedStatus(key)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedStatus === key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {config.icon} {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filter */}
        {allTags.length > 0 && (
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag('all')}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedTag === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                All Topics
              </button>
              {allTags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'hover:border-primary-300 hover:bg-primary-50 dark:hover:border-primary-700 border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sort Options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort-select"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="focus:border-primary-500 focus:ring-primary-500/20 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition-all focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            >
              <option value="year-desc">Year (Newest)</option>
              <option value="year-asc">Year (Oldest)</option>
              <option value="title">Title (A-Z)</option>
              <option value="author">Author (A-Z)</option>
              <option value="rating">Rating (Highest)</option>
            </select>
          </div>
          {(selectedType !== 'all' ||
            selectedStatus !== 'all' ||
            selectedTag !== 'all' ||
            searchQuery) && (
            <button
              onClick={() => {
                setSelectedType('all')
                setSelectedStatus('all')
                setSelectedTag('all')
                setSearchQuery('')
              }}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by title, author, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="focus:border-primary-500 focus:ring-primary-500/20 dark:focus:border-primary-400 w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-11 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Results count */}
        {(searchQuery ||
          selectedType !== 'all' ||
          selectedStatus !== 'all' ||
          selectedTag !== 'all') && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredList.length} {filteredList.length === 1 ? 'item' : 'items'}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        )}
      </div>

      {/* Featured Section */}
      {featured.length > 0 &&
        selectedType === 'all' &&
        selectedStatus === 'all' &&
        selectedTag === 'all' &&
        !searchQuery && (
          <div className="py-8">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
              <svg className="text-primary-500 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Recommended Reading
            </h2>
            <div className="grid gap-6 lg:grid-cols-1">
              {featured.map((item, index) => renderItem(item, index))}
            </div>
          </div>
        )}

      {/* Books Section */}
      {books.length > 0 && (
        <div className="py-12">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Books ({books.length})
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {books.map((book, index) => renderItem(book, index))}
          </div>
        </div>
      )}

      {/* Research Papers Section */}
      {papers.length > 0 && (
        <div className="py-12">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Research Papers ({papers.length})
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {papers.map((paper, index) => renderItem(paper, index))}
          </div>
        </div>
      )}

      {filteredList.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            {searchQuery
              ? `No items found matching "${searchQuery}". Try a different search term.`
              : 'No reading items found.'}
          </p>
        </div>
      )}
    </div>
  )
}
