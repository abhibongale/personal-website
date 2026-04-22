'use client'

import { useState, useEffect } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import personalConfig from '@/data/personalConfig'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = personalConfig.preferences.maxBlogPostsOnHomepage

// Animated counter component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function Home({ posts }) {
  const featuredProject = personalConfig.projects?.find((p) => p.featured)
  const latestPost = posts[0]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Enhanced Hero Section */}
        <div className="from-primary-500 via-primary-600 relative overflow-hidden rounded-2xl bg-gradient-to-br to-orange-700 px-8 py-16 shadow-xl sm:px-12 md:py-24">
          <div className="absolute inset-0 bg-[url('/static/images/grid.svg')] opacity-10"></div>

          <div className="relative">
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
              {/* Avatar Section */}
              <div className="mb-8 lg:mb-0">
                <div className="relative">
                  <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-orange-200 to-amber-200 opacity-75 blur"></div>
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl ring-4 ring-white/10 sm:h-40 sm:w-40">
                    <Image
                      src="/static/images/avatar.png"
                      alt={`${siteMetadata.author} - Profile Picture`}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                {/* Status Badge */}
                {personalConfig.hero.availableForHire && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-white">
                      Available for opportunities
                    </span>
                  </div>
                )}

                <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  {personalConfig.hero.title}
                  <span className="block bg-gradient-to-r from-orange-100 to-amber-100 bg-clip-text text-transparent">
                    {personalConfig.hero.subtitle}
                  </span>
                </h1>

                <p className="mt-4 text-lg leading-7 text-orange-50 sm:text-xl">
                  {personalConfig.hero.description}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
                  {personalConfig.hero.badges.map(
                    (badge, index) =>
                      badge.visible && (
                        <div
                          key={index}
                          className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm"
                        >
                          <p className="text-sm font-medium text-white">{badge.text}</p>
                        </div>
                      )
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <Link
                    href="/projects"
                    className="text-primary-600 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    View Projects
                  </Link>
                  <Link
                    href={`mailto:${personalConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Get in Touch
                  </Link>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                  <div className="transition-transform hover:scale-110">
                    <SocialIcon kind="github" href={personalConfig.github} size={6} />
                  </div>
                  <div className="transition-transform hover:scale-110">
                    <SocialIcon kind="linkedin" href={personalConfig.linkedin} size={6} />
                  </div>
                  <div className="transition-transform hover:scale-110">
                    <SocialIcon kind="mail" href={`mailto:${personalConfig.email}`} size={6} />
                  </div>
                  {personalConfig.twitter && (
                    <div className="transition-transform hover:scale-110">
                      <SocialIcon kind="x" href={personalConfig.twitter} size={6} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Live Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter end={posts.length} />+
                </div>
                <div className="text-sm text-orange-100">Blog Posts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter end={personalConfig.projects?.length || 0} />
                </div>
                <div className="text-sm text-orange-100">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter end={personalConfig.skills?.length || 0} />+
                </div>
                <div className="text-sm text-orange-100">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter
                    end={
                      new Date().getFullYear() -
                      (personalConfig.experience?.[0]?.period
                        ? parseInt(personalConfig.experience[0].period.split('-')[0])
                        : new Date().getFullYear())
                    }
                  />
                  +
                </div>
                <div className="text-sm text-orange-100">Years Experience</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Section */}
        {(featuredProject || latestPost) && (
          <div className="py-12">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Featured Project */}
              {featuredProject && (
                <div className="border-primary-200 from-primary-50 dark:border-primary-800 dark:from-primary-950/20 rounded-xl border-2 bg-gradient-to-br to-orange-50 p-6 shadow-sm dark:to-orange-950/20">
                  <div className="mb-3 flex items-center gap-2">
                    <svg
                      className="text-primary-600 dark:text-primary-400 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h3 className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
                      Featured Project
                    </h3>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                    {featuredProject.title}
                  </h4>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {featuredProject.description?.substring(0, 150)}...
                  </p>
                  <Link
                    href="/projects"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    View Project
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              )}

              {/* Latest Post */}
              {latestPost && (
                <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-sm dark:border-blue-800 dark:from-blue-950/20 dark:to-cyan-950/20">
                  <div className="mb-3 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase dark:text-blue-400">
                      Latest Post
                    </h3>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                    {latestPost.title}
                  </h4>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {latestPost.summary?.substring(0, 150)}...
                  </p>
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Read Article
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, readingTime } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="space-y-1 text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        {readingTime && (
                          <div className="flex items-center gap-1 text-sm">
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {readingTime.text}
                          </div>
                        )}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
