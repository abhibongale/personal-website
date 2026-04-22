import Link from '@/components/Link'

interface SeriesPost {
  slug: string
  title: string
  part: number
}

interface SeriesBannerProps {
  seriesName: string
  currentPart: number
  posts: SeriesPost[]
}

export default function SeriesBanner({ seriesName, currentPart, posts }: SeriesBannerProps) {
  const sortedPosts = posts.sort((a, b) => a.part - b.part)

  return (
    <div className="border-primary-200 from-primary-50 dark:border-primary-800 dark:from-primary-950/30 mb-8 overflow-hidden rounded-xl border-2 bg-gradient-to-r to-orange-50 dark:to-orange-950/30">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <svg
            className="text-primary-600 dark:text-primary-400 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Series: {seriesName}
          </h3>
          <span className="bg-primary-500 ml-auto rounded-full px-3 py-1 text-sm font-medium text-white">
            Part {currentPart} of {posts.length}
          </span>
        </div>
        <div className="space-y-2">
          {sortedPosts.map((post) => (
            <div
              key={post.slug}
              className={`flex items-center gap-2 rounded-lg p-2 transition-colors ${
                post.part === currentPart
                  ? 'bg-primary-500 text-white'
                  : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${
                  post.part === currentPart
                    ? 'text-primary-500 bg-white'
                    : 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                }`}
              >
                {post.part}
              </span>
              {post.part === currentPart ? (
                <span className="font-medium">{post.title}</span>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className={`font-medium transition-colors ${
                    post.part < currentPart
                      ? 'hover:text-primary-600 dark:hover:text-primary-400 text-gray-600 dark:text-gray-400'
                      : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-500 dark:text-gray-500'
                  }`}
                >
                  {post.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
