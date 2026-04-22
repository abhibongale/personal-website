import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import personalConfig from '@/data/personalConfig'
import { allBlogs } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  // Calculate years of experience
  const calculateYearsExperience = () => {
    if (!personalConfig.experience || personalConfig.experience.length === 0) return '0'

    const currentYear = new Date().getFullYear()
    const experiences = personalConfig.experience
      .filter((exp) => exp.period) // Filter out entries without period
      .map((exp) => {
        const startYear = parseInt(exp.period.split('-')[0].trim()) || currentYear
        return currentYear - startYear
      })

    if (experiences.length === 0) return '0'

    const maxYears = Math.max(...experiences)
    return maxYears > 0 ? `${maxYears}+` : '1'
  }

  // Count open source projects
  const openSourceCount = personalConfig.projects?.length || 0

  // Count published blog posts
  const blogCount = allBlogs.filter((blog) => !blog.draft).length

  // Count tech stack items
  const techStackCount = personalConfig.skills?.length || 0

  const quickStats = [
    { label: 'Years Experience', value: calculateYearsExperience(), icon: '💼' },
    { label: 'Open Source Projects', value: openSourceCount.toString(), icon: '🚀' },
    { label: 'Blog Posts', value: blogCount.toString(), icon: '📝' },
    { label: 'Tech Stack', value: `${techStackCount}+`, icon: '🛠️' },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="from-primary-500 via-primary-600 relative overflow-hidden rounded-2xl bg-gradient-to-br to-orange-700 px-8 py-16 shadow-xl sm:px-12 md:py-20">
        <div className="absolute inset-0 bg-[url('/static/images/grid.svg')] opacity-10"></div>
        <div className="relative flex flex-col items-center text-center">
          {avatar && (
            <div className="mb-6">
              <Image
                src={avatar}
                alt={name}
                width={160}
                height={160}
                className="h-40 w-40 rounded-full border-4 border-white/20 shadow-2xl ring-4 ring-white/10"
              />
            </div>
          )}
          <h1 className="mb-3 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Hi, I'm {name.split(' ')[0]} 👋
          </h1>
          <p className="mb-4 text-xl text-orange-50 sm:text-2xl">
            {occupation} at {company}
          </p>
          <p className="mb-6 max-w-2xl text-lg text-orange-100">
            Building the future of cloud infrastructure and bare metal automation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="transition-transform hover:scale-110">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={8} />
            </div>
            <div className="transition-transform hover:scale-110">
              <SocialIcon kind="github" href={github} size={8} />
            </div>
            <div className="transition-transform hover:scale-110">
              <SocialIcon kind="linkedin" href={linkedin} size={8} />
            </div>
            <div className="transition-transform hover:scale-110">
              <SocialIcon kind="x" href={twitter} size={8} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="hover:border-primary-300 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="mb-2 text-3xl">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* About Me */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span className="text-3xl">👨‍💻</span>
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">{children}</div>
        </div>

        {/* Experience Timeline */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span className="text-3xl">💼</span>
            Experience
          </h2>
          <div className="space-y-6">
            {personalConfig.experience?.map((exp, index) => (
              <div
                key={index}
                className={`relative border-l-2 pl-6 ${
                  exp.current ? 'border-primary-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                <div
                  className={`absolute top-0 -left-2 h-4 w-4 rounded-full ${
                    exp.current ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                ></div>
                <div className="mb-1 flex items-center gap-2">
                  {exp.current && (
                    <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-2.5 py-0.5 text-xs font-medium">
                      Current
                    </span>
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                <p
                  className={
                    exp.current
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }
                >
                  {exp.company}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="border-primary-200 dark:border-primary-800 dark:from-primary-950/20 rounded-xl border bg-gradient-to-br from-orange-50 to-amber-50 p-8 dark:to-orange-950/20">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            <span className="text-3xl">🎯</span>
            Currently Working On
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 dark:bg-primary-900/50 flex-shrink-0 rounded-lg p-2">
                <svg
                  className="text-primary-600 dark:text-primary-400 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  OpenStack Ironic Contributions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enhancing bare metal provisioning and power management features
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 dark:bg-primary-900/50 flex-shrink-0 rounded-lg p-2">
                <svg
                  className="text-primary-600 dark:text-primary-400 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Learning: {personalConfig.currentlyExploring}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expanding skills in emerging technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        {personalConfig.funFacts && personalConfig.funFacts.length > 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
              <span className="text-3xl">✨</span>
              Fun Facts
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {personalConfig.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-2xl">{fact.split(' ')[0]}</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {fact.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
