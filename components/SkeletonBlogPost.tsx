export default function SkeletonBlogPost() {
  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          {/* Date skeleton */}
          <div className="skeleton h-6 w-24 rounded bg-gray-200 dark:bg-gray-800"></div>

          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              {/* Title skeleton */}
              <div className="skeleton h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>

              {/* Tags skeleton */}
              <div className="flex gap-2">
                <div className="skeleton h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                <div className="skeleton h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                <div className="skeleton h-6 w-18 rounded-full bg-gray-200 dark:bg-gray-800"></div>
              </div>

              {/* Summary skeleton */}
              <div className="space-y-2">
                <div className="skeleton h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
                <div className="skeleton h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
                <div className="skeleton h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-800"></div>
              </div>
            </div>

            {/* Read more skeleton */}
            <div className="skeleton h-4 w-32 rounded bg-gray-200 dark:bg-gray-800"></div>
          </div>
        </div>
      </article>
    </li>
  )
}
