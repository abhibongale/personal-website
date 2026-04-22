'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  description?: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex items-center justify-between gap-4">
        {!prevPage && (
          <button
            className="cursor-not-allowed rounded-lg border-2 border-gray-200 bg-gray-100 px-6 py-3 font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-800"
            disabled={!prevPage}
          >
            ← Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 rounded-lg border-2 bg-white px-6 py-3 font-medium transition-all duration-200 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            ← Previous
          </Link>
        )}
        <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-not-allowed rounded-lg border-2 border-gray-200 bg-gray-100 px-6 py-3 font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-800"
            disabled={!nextPage}
          >
            Next →
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 rounded-lg border-2 bg-white px-6 py-3 font-medium transition-all duration-200 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            Next →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="from-primary-50 dark:from-primary-950/20 mb-8 space-y-3 rounded-xl border border-gray-200 bg-gradient-to-br to-orange-50 p-8 shadow-sm dark:border-gray-800 dark:to-orange-950/20">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
          {description && (
            <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">{description}</p>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <svg className="text-primary-500 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span>{tagKeys.length} tags</span>
          </div>
        </div>
        <div className="flex sm:space-x-8">
          <div className="hidden h-full max-h-screen max-w-[280px] min-w-[280px] flex-wrap overflow-auto rounded-xl border border-gray-200 bg-white pt-5 shadow-sm sm:flex dark:border-gray-800 dark:bg-gray-900">
            <div className="w-full px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2 text-lg font-bold">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Posts
                </h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 mb-4 flex items-center gap-2 text-lg font-bold text-gray-700 transition-colors dark:text-gray-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Posts
                </Link>
              )}
              <div className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Filter by Tag
              </div>
              <ul className="space-y-2">
                {sortedTags.map((t) => {
                  const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  return (
                    <li key={t}>
                      {isActive ? (
                        <div className="bg-primary-100 dark:bg-primary-900/50 flex items-center justify-between rounded-lg px-3 py-2">
                          <span className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
                            {t}
                          </span>
                          <span className="bg-primary-200 text-primary-700 dark:bg-primary-800 dark:text-primary-300 rounded-full px-2 py-0.5 text-xs font-bold">
                            {tagCounts[t]}
                          </span>
                        </div>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          aria-label={`View posts tagged ${t}`}
                        >
                          <span>{t}</span>
                          <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                            {tagCounts[t]}
                          </span>
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            {displayPosts.length === 0 ? (
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
                  No posts found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  There are no posts matching your criteria. Try selecting a different tag.
                </p>
              </div>
            ) : (
              <ul className="space-y-6">
                {displayPosts.map((post) => {
                  const { path, date, title, summary, tags, readingTime } = post
                  return (
                    <li key={path}>
                      <article className="group hover:border-primary-300 dark:hover:border-primary-700 relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
                        {/* Metadata */}
                        <dl className="mb-4">
                          <dt className="sr-only">Published on</dt>
                          <dd className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <span className="inline-flex items-center gap-1.5">
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
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <time dateTime={date} suppressHydrationWarning>
                                {formatDate(date, siteMetadata.locale)}
                              </time>
                            </span>
                            {readingTime && (
                              <>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <span className="inline-flex items-center gap-1.5">
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
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {readingTime.text}
                                </span>
                              </>
                            )}
                          </dd>
                        </dl>

                        {/* Title */}
                        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
                          <Link
                            href={`/${path}`}
                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-gray-900 transition-colors dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="mb-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        )}

                        {/* Summary */}
                        <div className="mb-4 text-gray-600 dark:text-gray-400">{summary}</div>

                        {/* Read More Link */}
                        <Link
                          href={`/${path}`}
                          className="text-primary-600 dark:text-primary-400 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                          aria-label={`Read more: ${title}`}
                        >
                          Read More
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
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </article>
                    </li>
                  )
                })}
              </ul>
            )}
            {pagination && pagination.totalPages > 1 && displayPosts.length > 0 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
