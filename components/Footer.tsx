import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
              {siteMetadata.author}
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Building the future of cloud infrastructure and bare metal automation. Writing about
              distributed systems, Kubernetes, and software engineering.
            </p>
            <div className="flex space-x-4">
              {siteMetadata.email && (
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              )}
              {siteMetadata.github && (
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              )}
              {siteMetadata.linkedin && (
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              )}
              {siteMetadata.x && <SocialIcon kind="x" href={siteMetadata.x} size={6} />}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/shelf"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  Reading Shelf
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/feed.xml"
                  className="hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-1 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/tags"
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  Tags
                </Link>
              </li>
              <li>
                <Link
                  href={siteMetadata.siteRepo}
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-sm text-gray-600 transition-colors dark:text-gray-400"
                >
                  Source Code
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with{' '}
              <Link
                href="https://nextjs.org"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Next.js
              </Link>{' '}
              &{' '}
              <Link
                href="https://tailwindcss.com"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Tailwind CSS
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
