import personalConfig from '@/data/personalConfig'

interface ReadingItem {
  title: string
  author: string
  type: 'book' | 'research-paper'
  description: string
  link?: string
  year?: string
  tags?: string[]
}

interface ReadingListProps {
  filterTags?: string[]
  maxItems?: number
}

export default function ReadingList({
  filterTags = [],
  maxItems = personalConfig.preferences.maxReadingListItems,
}: ReadingListProps) {
  if (!personalConfig.preferences.showReadingList) return null

  // Filter reading list by tags if provided, otherwise show all
  let items = personalConfig.readingList as ReadingItem[]

  if (filterTags.length > 0) {
    items = items.filter((item) => item.tags?.some((tag) => filterTags.includes(tag.toLowerCase())))
  }

  // Limit number of items
  items = items.slice(0, maxItems)

  if (items.length === 0) return null

  return (
    <div className="border-primary-200 dark:border-primary-800 dark:from-primary-950/20 mt-8 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 p-6 dark:to-orange-950/20">
      <div className="mb-6 flex items-center gap-3">
        <svg
          className="text-primary-600 dark:text-primary-400 h-6 w-6"
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
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Recommended Reading</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="group hover:border-primary-300 dark:hover:border-primary-700 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-start gap-3">
              {/* Icon based on type */}
              <div className="flex-shrink-0">
                {item.type === 'book' ? (
                  <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="mb-1 flex items-start justify-between gap-2">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 dark:hover:text-primary-400 font-semibold text-gray-900 transition-colors dark:text-gray-100"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                  )}
                  <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium">
                    {item.type === 'book' ? '📚 Book' : '📄 Paper'}
                  </span>
                </div>

                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{item.author}</span>
                  {item.year && <span className="text-gray-500"> • {item.year}</span>}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-2 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                  >
                    Read more
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
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💡 These resources have shaped my thinking on distributed systems and software
          architecture
        </p>
      </div>
    </div>
  )
}
