export default function SkeletonCard() {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div className="overflow-hidden rounded-xl border-2 border-gray-200/60 bg-white dark:border-gray-700/60 dark:bg-gray-900">
        {/* Image skeleton */}
        <div className="skeleton h-36 w-full bg-gray-200 md:h-36 lg:h-48 dark:bg-gray-800"></div>

        {/* Content skeleton */}
        <div className="space-y-4 p-6">
          {/* Title skeleton */}
          <div className="skeleton h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="skeleton h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="skeleton h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-800"></div>
          </div>

          {/* Link skeleton */}
          <div className="skeleton h-4 w-32 rounded bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  )
}
