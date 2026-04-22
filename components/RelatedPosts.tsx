'use client'

import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface RelatedPostsProps {
  currentSlug: string
  tags: string[]
  allPosts: CoreContent<Blog>[]
  maxPosts?: number
}

export default function RelatedPosts({
  currentSlug,
  tags,
  allPosts,
  maxPosts = 3,
}: RelatedPostsProps) {
  // Find related posts based on matching tags
  const relatedPosts = allPosts
    .filter((post) => {
      // Exclude current post
      if (post.slug === currentSlug) return false

      // Check if post has any matching tags
      const postTags = post.tags || []
      return postTags.some((tag) => tags.includes(tag))
    })
    .map((post) => {
      // Calculate relevance score (number of matching tags)
      const postTags = post.tags || []
      const matchingTags = postTags.filter((tag) => tags.includes(tag))
      return {
        ...post,
        relevanceScore: matchingTags.length,
        matchingTags,
      }
    })
    .sort((a, b) => {
      // Sort by relevance score, then by date
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, maxPosts)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.path}`}
            className="group hover:border-primary-300 dark:hover:border-primary-700 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="space-y-3">
              <div>
                <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-lg font-semibold text-gray-900 transition-colors dark:text-gray-100">
                  {post.title}
                </h3>
              </div>

              <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {post.summary}
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={post.date}>{formatDate(post.date, siteMetadata.locale)}</time>
                {post.readingTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-3 w-3"
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
                      {post.readingTime.text}
                    </span>
                  </>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {post.matchingTags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-2 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
