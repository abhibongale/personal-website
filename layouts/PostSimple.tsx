'use client'

import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import TableOfContents from '@/components/TableOfContents'
import ReadingList from '@/components/ReadingList'
import RelatedPosts from '@/components/RelatedPosts'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'
import ShareButtons from '@/components/ShareButtons'
import ReadingProgressBar from '@/components/ReadingProgressBar'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  allPosts?: CoreContent<Blog>[]
}

export default function PostLayout({ content, next, prev, allPosts = [], children }: LayoutProps) {
  const { path, slug, date, title, tags, readingTime } = content

  return (
    <SectionContainer>
      <ReadingProgressBar />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            {/* Enhanced Header with Gradient Background */}
            <div className="from-primary-50 dark:from-primary-950/20 mb-8 space-y-6 rounded-xl border border-gray-200 bg-gradient-to-br to-orange-50 p-8 shadow-sm dark:border-gray-800 dark:to-orange-950/20">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Home
                </Link>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400">
                  Blog
                </Link>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-900 dark:text-gray-100">Article</span>
              </nav>

              {/* Title */}
              <div>
                <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
                  {title}
                </h1>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="text-primary-500 h-5 w-5"
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
                  <time dateTime={date} className="font-medium">
                    {formatDate(date, siteMetadata.locale)}
                  </time>
                </div>

                {readingTime && (
                  <>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <div className="flex items-center gap-2">
                      <svg
                        className="text-primary-500 h-5 w-5"
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
                      <span className="font-medium">{readingTime.text}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}

              {/* Share Buttons */}
              <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <ShareButtons title={title} slug={slug} />
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-[1fr_250px] xl:gap-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-1 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              {/* Enhanced Content Area */}
              <div className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-medium prose-code:text-gray-900 prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:not-italic dark:prose-headings:text-gray-100 dark:prose-p:text-gray-300 dark:prose-a:text-primary-400 dark:hover:prose-a:text-primary-300 dark:prose-strong:text-gray-100 dark:prose-code:bg-gray-800 dark:prose-code:text-gray-100 dark:prose-blockquote:bg-primary-950/20 max-w-none pt-10 pb-8">
                {children}
              </div>
              <div className="py-6">
                <ReadingList filterTags={tags} maxItems={3} />
              </div>
              <div className="py-6">
                <RelatedPosts currentSlug={slug} tags={tags} allPosts={allPosts} maxPosts={3} />
              </div>
            </div>
            <aside className="hidden xl:block">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
            {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
            <footer>
              {/* Enhanced Prev/Next Navigation */}
              {(prev || next) && (
                <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
                  <div className="grid gap-4 md:grid-cols-2">
                    {prev && prev.path ? (
                      <Link
                        href={`/${prev.path}`}
                        className="group hover:border-primary-300 dark:hover:border-primary-700 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
                        aria-label={`Previous post: ${prev.title}`}
                      >
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
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
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                          Previous Article
                        </div>
                        <div className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-gray-900 transition-colors dark:text-gray-100">
                          {prev.title}
                        </div>
                      </Link>
                    ) : (
                      <div></div>
                    )}

                    {next && next.path && (
                      <Link
                        href={`/${next.path}`}
                        className="group hover:border-primary-300 dark:hover:border-primary-700 rounded-xl border border-gray-200 bg-white p-6 text-right transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
                        aria-label={`Next post: ${next.title}`}
                      >
                        <div className="mb-2 flex items-center justify-end gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          Next Article
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <div className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-gray-900 transition-colors dark:text-gray-100">
                          {next.title}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-8 text-center">
                <Link
                  href="/blog"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to all posts
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
