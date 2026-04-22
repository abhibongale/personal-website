import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Skills from '@/components/Skills'
import GitHubStats from '@/components/GitHubStats'
import personalConfig from '@/data/personalConfig'
import Achievements from '@/components/Achievements'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Software engineer specializing in distributed systems, cloud infrastructure, and bare metal automation. Active contributor to OpenStack Ironic and Metal³.',
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <div className="mt-8 space-y-8">
        {personalConfig.preferences.showGitHubStats && (
          <GitHubStats username={personalConfig.githubUsername} />
        )}
        {personalConfig.preferences.showAchievements && <Achievements />}
        {personalConfig.preferences.showSkills && <Skills />}

        {/* Let's Connect CTA */}
        <div className="border-primary-300 from-primary-50 dark:border-primary-700 dark:from-primary-950/30 rounded-xl border-2 bg-gradient-to-r to-orange-50 p-8 text-center dark:to-orange-950/30">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Let's Connect! 🤝
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Interested in collaboration, have questions, or just want to chat about tech?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`mailto:${author.email}`}
              className="from-primary-500 to-primary-600 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </Link>
            <Link
              href={author.github || personalConfig.github}
              className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950/20 inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 font-medium transition-all duration-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
