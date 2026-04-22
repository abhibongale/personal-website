import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="from-primary-500 to-primary-600 bg-gradient-to-r bg-clip-text text-9xl font-extrabold text-transparent">
            404
          </h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Page Not Found</h2>
          <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-400">
            Looks like you've ventured into uncharted territory. The page you're looking for doesn't
            exist.
          </p>
          <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="from-primary-500 to-primary-600 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="border-primary-500 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950/20 inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-medium transition-all duration-200"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
